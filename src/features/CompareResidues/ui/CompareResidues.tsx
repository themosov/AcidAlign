import { Box } from "@mui/material";
import { Residue } from "@/shared/ui/Residue";
import { aminoColorMap } from "entities/AminoAcidSequence";
import React, { useRef } from "react";
import { useCopyOnSelect } from "@/shared/hooks/useCopyOnSelect";
import { useToast } from "@/shared/hooks/useToast";
import { Toast } from "@/shared/ui/Toast";

interface CompareResiduesProps {
    seq1: string;
    seq2: string;
}

export const CompareResidues = ({ seq1, seq2 }: CompareResiduesProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { open, message, showToast, closeToast } = useToast();

    useCopyOnSelect(containerRef, showToast);

    return (
        <>
            <Box
                sx={{
                    marginBottom: "1rem",
                    userSelect: "text",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    lineHeight: "3rem",
                }}
                ref={containerRef}
                data-testid="container"
            >
                {seq2.split("").map((acid, index) => (
                    // использую индекс, так как последовательность неизменяема
                    <Residue
                        key={index}
                        acid={acid}
                        color={
                            acid === seq1[index] ? "" : aminoColorMap.get(acid)
                        }
                    />
                ))}
            </Box>
            <Toast open={open} message={message} onClose={closeToast} />
        </>
    );
};
