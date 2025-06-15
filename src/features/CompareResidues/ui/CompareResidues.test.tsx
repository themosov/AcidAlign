import { render, screen } from "@testing-library/react";
import { CompareResidues } from "./CompareResidues";

test("highlights mismatched residues with a color", () => {
    const seq1 = "ACGTAC";
    const seq2 = "ACGTTC";

    render(<CompareResidues seq1={seq1} seq2={seq2} />);

    const residues = screen.getByTestId("container").querySelectorAll("span");

    const mismatched = Array.from(residues).filter((span, index) => {
        return span.textContent !== seq1[index];
    });

    expect(mismatched.length).toBe(1);
    expect(mismatched[0].textContent).toBe("T");
});
