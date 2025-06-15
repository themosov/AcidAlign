import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { CompareResidues } from "./CompareResidues";

jest.mock("@/shared/ui/Toast", () => ({
    Toast: ({ open, message }: any) =>
        open ? <div data-testid="toast">{message}</div> : null,
}));

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

jest.mock("@/shared/ui/Residue", () => ({
    Residue: ({ acid, color }: { acid: string; color?: string }) => (
        <span data-testid="residue" style={{ color }}>
            {acid}
        </span>
    ),
}));

describe("CompareResidues", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders residues with correct colors", () => {
        render(<CompareResidues seq1="ACG" seq2="CCG" />);

        const residues = screen.getAllByTestId("residue");
        expect(residues).toHaveLength(3);

        expect(residues[0]).toHaveTextContent("C");
        expect(residues[0]).toHaveStyle("color: #FFEA00"); // C -> #FFEA00

        expect(residues[1]).toHaveTextContent("C");
        // Здесь acid === seq1[index],  C === C, значит цвет undefined (по компоненту)
        expect(residues[1].style.color).toBe("");

        expect(residues[2]).toHaveTextContent("G");
        expect(residues[2].style.color).toBe("");
    });

    it("copies selected text to clipboard and shows success toast", async () => {
        const writeTextMock = jest.fn().mockResolvedValue(undefined);
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextMock,
            },
        });

        render(<CompareResidues seq1="ACG" seq2="CCG" />);

        const container = screen.getByTestId("container");
        const firstResidue = container.querySelector("[data-testid='residue']");

        const selectionMock = {
            toString: () => "CC",
            anchorNode: firstResidue,
        };
        jest.spyOn(window, "getSelection").mockReturnValue(
            selectionMock as any,
        );

        await act(async () => {
            fireEvent.mouseUp(container);
        });

        expect(writeTextMock).toHaveBeenCalledWith("CC");
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

        render(<CompareResidues seq1="ACG" seq2="CCG" />);

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
