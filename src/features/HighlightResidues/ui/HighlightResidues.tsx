import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Residue } from "@/shared/ui/Residue";
import { aminoColorMap } from "entities/AminoAcidSequence";
import { Toast } from "@/shared/ui/Toast";
import { useToast } from "@/shared/hooks/useToast";
import { useCopyOnSelect } from "@/shared/hooks/useCopyOnSelect";

type HighlightResiduesProps = {
    sequence: string;
};

export const HighlightResidues = ({ sequence }: HighlightResiduesProps) => {
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
                {sequence.split("").map((acid, index) => (
                    // использую индекс, так как последовательность неизменяема
                    <Residue
                        key={index}
                        acid={acid}
                        color={aminoColorMap.get(acid)}
                    />
                ))}
            </Box>
            <Toast open={open} message={message} onClose={closeToast} />
        </>
    );
};
