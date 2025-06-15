import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SequenceForm } from "./SequenceForm";

jest.mock("@/shared/ui/Button", () => ({
    Button: (props: any) => <button {...props} />,
}));

jest.mock("@/features/SequenceForm/ui/SequenceLengthAlert", () => ({
    SequenceLengthAlert: () => <p>Длины последовательностей не совпадают</p>,
}));

const setSequenceDataMock = jest.fn();
jest.mock("entities/AminoAcidSequence", () => ({
    useSequence: () => ({
        setSequenceData: setSequenceDataMock,
    }),
}));

jest.mock("@/features/SequenceForm/ui/SequenceFields", () => ({
    SequenceFields: ({ formData, handleChange, errors }: any) => (
        <div>
            <label htmlFor="seq1">Последовательность 1</label>
            <input
                name="seq1"
                id="seq1"
                value={formData.seq1}
                onChange={handleChange}
                aria-invalid={!!errors.seq1}
            />
            {errors.seq1 && <p>{errors.seq1}</p>}

            <label htmlFor="seq2">Последовательность 2</label>
            <input
                name="seq2"
                id="seq2"
                value={formData.seq2}
                onChange={handleChange}
                aria-invalid={!!errors.seq2}
            />
            {errors.seq2 && <p>{errors.seq2}</p>}
        </div>
    ),
}));

describe("SequenceForm", () => {
    beforeEach(() => {
        render(<SequenceForm />);
        setSequenceDataMock.mockClear();
    });

    test("показывает ошибки при пустой отправке", () => {
        fireEvent.click(screen.getByRole("button", { name: /выровнять/i }));

        const errors = screen.getAllByText(/обязательное поле/i);
        expect(errors).toHaveLength(2);
    });

    test("показывает ошибку при разной длине", () => {
        fireEvent.change(screen.getByLabelText(/последовательность 1/i), {
            target: { value: "AGCT" },
        });
        fireEvent.change(screen.getByLabelText(/последовательность 2/i), {
            target: { value: "AGC" },
        });

        fireEvent.click(screen.getByRole("button", { name: /выровнять/i }));

        expect(
            screen.getByText(/длины последовательностей не совпадают/i),
        ).toBeInTheDocument();
    });

    test("очищает поля после успешной отправки", () => {
        const input1 = screen.getByLabelText(/последовательность 1/i);
        const input2 = screen.getByLabelText(/последовательность 2/i);

        fireEvent.change(input1, {
            target: { value: "AGCT" },
        });
        fireEvent.change(input2, {
            target: { value: "AGCT" },
        });

        fireEvent.click(screen.getByRole("button", { name: /выровнять/i }));

        expect(setSequenceDataMock).toHaveBeenCalledWith({
            seq1: "AGCT",
            seq2: "AGCT",
        });

        expect(input1).toHaveValue("");
        expect(input2).toHaveValue("");
    });
});
