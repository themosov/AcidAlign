import { render, screen } from "@testing-library/react";
import { HighlightResidues } from "./HighlightResidues";
import { aminoColorMap } from "entities/AminoAcidSequence";

jest.mock("@/shared/ui/Toast", () => ({
    Toast: () => <div data-testid="toast" />,
}));

jest.mock("@/shared/hooks/useToast", () => ({
    useToast: () => ({
        open: false,
        message: "",
        showToast: jest.fn(),
        closeToast: jest.fn(),
    }),
}));

jest.mock("@/shared/hooks/useCopyOnSelect", () => ({
    useCopyOnSelect: jest.fn(),
}));

describe("HighlightResidues", () => {
    it("renders each amino acid with correct color", () => {
        const sequence = "ACDE"; // Разные типы кислот

        render(<HighlightResidues sequence={sequence} />);

        const residues = screen
            .getByTestId("container")
            .querySelectorAll("span");

        expect(residues.length).toBe(sequence.length);

        residues.forEach((span, index) => {
            const acid = sequence[index];
            expect(span).toHaveTextContent(acid);

            const expectedColor = aminoColorMap.get(acid);
            if (expectedColor) {
                const style = window.getComputedStyle(span);
                expect(style.backgroundColor).not.toBe("transparent");
            }
        });
    });
});
