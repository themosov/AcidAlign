import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SequenceForm } from "./SequenceForm";
import { useSequenceForm } from "@/features/SequenceForm/lib/useSequenceForm";

jest.mock("@/features/SequenceForm/lib/useSequenceForm");

const mockHandleSubmit = jest.fn();
const mockHandleChange = jest.fn();
const mockHandleKeyDown = jest.fn();

const mockUseSequenceForm = useSequenceForm as jest.MockedFunction<
    typeof useSequenceForm
>;

describe("SequenceForm", () => {
    beforeEach(() => {
        mockUseSequenceForm.mockReturnValue({
            formData: { seq1: "", seq2: "" },
            errors: {},
            inputRef1: React.createRef(),
            inputRef2: React.createRef(),
            handleChange: mockHandleChange,
            handleSubmit: mockHandleSubmit,
            handleKeyDown: mockHandleKeyDown,
        });
    });

    it("renders both input fields and a disabled button initially", () => {
        render(<SequenceForm />);
        expect(
            screen.getByLabelText("Последовательность 1"),
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText("Последовательность 2"),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /выровнять/i }),
        ).toBeDisabled();
    });

    it("calls handleChange when input changes", () => {
        render(<SequenceForm />);
        const input1 = screen.getByLabelText("Последовательность 1");
        fireEvent.change(input1, { target: { value: "AAAGGG" } });
        expect(mockHandleChange).toHaveBeenCalled();
    });

    it("calls handleKeyDown when Enter is pressed", () => {
        render(<SequenceForm />);
        const input1 = screen.getByLabelText("Последовательность 1");
        fireEvent.keyDown(input1, {
            key: "Enter",
            code: "Enter",
            charCode: 13,
        });
        expect(mockHandleKeyDown).toHaveBeenCalled();
    });

    it("shows error alert if sequences have different lengths", () => {
        mockUseSequenceForm.mockReturnValueOnce({
            formData: { seq1: "AAA", seq2: "GGGG" },
            errors: { lengthMismatch: true },
            inputRef1: React.createRef(),
            inputRef2: React.createRef(),
            handleChange: mockHandleChange,
            handleSubmit: mockHandleSubmit,
            handleKeyDown: mockHandleKeyDown,
        });

        render(<SequenceForm />);
        expect(
            screen.getByText(
                "Последовательности должны иметь одинаковую длину",
            ),
        ).toBeInTheDocument();
    });

    it("enables submit button when both fields are filled", () => {
        mockUseSequenceForm.mockReturnValueOnce({
            formData: { seq1: "AAA", seq2: "AAA" },
            errors: {},
            inputRef1: React.createRef(),
            inputRef2: React.createRef(),
            handleChange: mockHandleChange,
            handleSubmit: mockHandleSubmit,
            handleKeyDown: mockHandleKeyDown,
        });

        render(<SequenceForm />);
        expect(
            screen.getByRole("button", { name: /выровнять/i }),
        ).not.toBeDisabled();
    });
});
