import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { HighlightResidues } from "./HighlightResidues";

// Мок для Toast
jest.mock("@/shared/ui/Toast", () => ({
    Toast: ({ open, message }: any) =>
        open ? <div data-testid="toast">{message}</div> : null,
}));

// Мок для useToast
const showToastMock = jest.fn();
const closeToastMock = jest.fn();

jest.mock("@/shared/hooks/useToast", () => ({
    useToast: () => ({
        open: true,
        message: "Mock message",
        showToast: showToastMock,
        closeToast: closeToastMock,
    }),
}));

// Мок Residue
jest.mock("@/shared/ui/Residue", () => ({
    Residue: ({ acid, color }: { acid: string; color?: string }) => (
        <span data-testid="residue" style={{ color }}>
            {acid}
        </span>
    ),
}));

describe("HighlightResidues", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders residues with correct colors", () => {
        render(<HighlightResidues sequence="CAG" />);

        const residues = screen.getAllByTestId("residue");
        expect(residues).toHaveLength(3);

        // Цвета из твоей aminoColorMap
        expect(residues[0]).toHaveTextContent("C");
        expect(residues[0]).toHaveStyle("color: #FFEA00");

        expect(residues[1]).toHaveTextContent("A");
        expect(residues[1]).toHaveStyle("color: #67E4A6");

        expect(residues[2]).toHaveTextContent("G");
        expect(residues[2]).toHaveStyle("color: #C4C4C4");
    });

    it("copies selected text to clipboard and shows success toast", async () => {
        const writeTextMock = jest.fn().mockResolvedValue(undefined);
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextMock,
            },
        });

        render(<HighlightResidues sequence="CAG" />);

        const container = screen.getByTestId("container");
        const firstResidue = container.querySelector("[data-testid='residue']");

        const selectionMock = {
            toString: () => "CA",
            anchorNode: firstResidue,
        };
        jest.spyOn(window, "getSelection").mockReturnValue(
            selectionMock as any,
        );

        await act(async () => {
            fireEvent.mouseUp(container);
        });

        expect(writeTextMock).toHaveBeenCalledWith("CA");
        expect(showToastMock).toHaveBeenCalledWith(
            "Выделенный текст скопирован!",
        );
    });

    it("shows error toast if copy fails", async () => {
        const writeTextMock = jest.fn().mockRejectedValue(new Error("fail"));
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextMock,
            },
        });

        render(<HighlightResidues sequence="CAG" />);

        const container = screen.getByTestId("container");
        const firstResidue = container.querySelector("[data-testid='residue']");

        const selectionMock = {
            toString: () => "G",
            anchorNode: firstResidue,
        };
        jest.spyOn(window, "getSelection").mockReturnValue(
            selectionMock as any,
        );

        await act(async () => {
            fireEvent.mouseUp(container);
        });

        expect(writeTextMock).toHaveBeenCalledWith("G");
        expect(showToastMock).toHaveBeenCalledWith(
            "Не удалось скопировать текст",
        );
    });
});
