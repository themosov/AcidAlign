import { Block } from "@/shared/ui/Block";
import { Text } from "@/shared/ui/Text";
import { Box, useTheme } from "@mui/material";
import IconDiagram from "@/shared/assets/icons/IconDiagram.svg";
import { Section } from "@/shared/ui/Section";
import React from "react";
import { HighlightResidues } from "@/features/HighlightResidues";
import { useSequence } from "entities/AminoAcidSequence";
import { CompareResidues } from "@/features/CompareResidues";
import { Tip } from "shared/ui/Tip";

export const AligmentSection = () => {
    const theme = useTheme();
    const { sequenceData } = useSequence();
    const { seq1, seq2 } = sequenceData;

    return (
        <Block>
            <Text textVariant="h2" sx={{ color: theme.palette.custom?.blue }}>
                <Box display="flex" alignItems="center" gap={1}>
                    <IconDiagram />
                    Выравнивание
                </Box>
            </Text>
            <Section>
                <Text
                    textVariant="h3"
                    sx={{ color: theme.palette.custom?.green }}
                >
                    Искомая последовательность
                </Text>
                <HighlightResidues sequence={seq1} />
                <Text
                    textVariant="h3"
                    sx={{ color: theme.palette.custom?.blue }}
                >
                    Последовательность для выравнивания
                </Text>
                <CompareResidues seq1={seq1} seq2={seq2} />
            </Section>
            <Tip sx={{ marginTop: "1rem" }} />
        </Block>
    );
};
