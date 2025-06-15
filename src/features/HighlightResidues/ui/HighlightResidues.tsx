import React, { useRef } from "react";
import { Box, Grid } from "@mui/material";
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
                sx={{ position: "relative", marginBottom: "1rem" }}
                ref={containerRef}
            >
                {/* Скрытый текст для поиска */}
                <Box
                    sx={{
                        position: "absolute",
                        opacity: 0,
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        userSelect: "text",
                        zIndex: -1,
                    }}
                >
                    {sequence}
                </Box>

                {/* Видимый слой */}
                <Grid
                    container
                    data-testid="container"
                    sx={{ gap: "5px", userSelect: "text" }}
                >
                    {sequence.split("").map((acid, index) => (
                        <Grid item key={index}>
                            <Residue
                                acid={acid}
                                color={aminoColorMap.get(acid)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Toast open={open} message={message} onClose={closeToast} />
        </>
    );
};
