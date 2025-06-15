import { Block } from "@/shared/ui/Block";
import { Text } from "@/shared/ui/Text";
import { Box, useTheme } from "@mui/material";
import IconSequence from "@/shared/assets/icons/IconSequence.svg";
import { SequenceForm } from "@/features/SequenceForm";
import React from "react";

export const SequenceSection = () => {
    const theme = useTheme();

    return (
        <Block>
            <Text textVariant="h2" sx={{ color: theme.palette.custom?.green }}>
                <Box display="flex" alignItems="center" gap={1}>
                    <IconSequence />
                    Последовательность
                </Box>
            </Text>
            <SequenceForm />
        </Block>
    );
};
