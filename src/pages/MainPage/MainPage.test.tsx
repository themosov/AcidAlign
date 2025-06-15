import React from "react";
import { render, screen } from "@testing-library/react";
import { MainPage } from "./MainPage";

jest.mock("@/widgets/MainPageHeader", () => ({
    MainPageHeader: () => <div data-testid="main-page-header" />,
}));

jest.mock("@/widgets/SequenceSection", () => ({
    SequenceSection: () => <div data-testid="sequence-section" />,
}));

jest.mock("@/widgets/AligmentSection", () => ({
    AligmentSection: () => <div data-testid="aligment-section" />,
}));

const mockUseSequence = jest.fn();

jest.mock("entities/AminoAcidSequence", () => ({
    useSequence: () => mockUseSequence(),
}));

describe("MainPage", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders header and sequence section always", () => {
        mockUseSequence.mockReturnValue({
            sequenceData: { seq1: "", seq2: "" },
        });

        render(<MainPage />);

        expect(screen.getByTestId("main-page-header")).toBeInTheDocument();
        expect(screen.getByTestId("sequence-section")).toBeInTheDocument();
    });

    it("renders AligmentSection if seq1 and seq2 exist", () => {
        mockUseSequence.mockReturnValue({
            sequenceData: { seq1: "ACG", seq2: "GTA" },
        });

        render(<MainPage />);

        expect(screen.getByTestId("aligment-section")).toBeInTheDocument();
    });

    it("does not render AligmentSection if seq1 or seq2 is missing", () => {
        mockUseSequence.mockReturnValue({
            sequenceData: { seq1: "ACG", seq2: "" },
        });

        render(<MainPage />);

        expect(screen.queryByTestId("aligment-section")).toBeNull();
    });
});
