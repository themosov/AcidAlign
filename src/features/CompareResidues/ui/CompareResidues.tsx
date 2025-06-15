import { Grid } from "@mui/material";
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
            <Grid
                container
                ref={containerRef}
                data-testid="container"
                sx={{ gap: "5px", marginBottom: "1rem" }}
            >
                {seq2.split("").map((acid, index) => (
                    // использую индекс, так как последовательность неизменяема
                    <Grid item key={index}>
                        <Residue
                            acid={acid}
                            color={
                                acid === seq1[index]
                                    ? undefined
                                    : aminoColorMap.get(acid)
                            }
                        />
                    </Grid>
                ))}
            </Grid>
            <Toast open={open} message={message} onClose={closeToast} />
        </>
    );
};
