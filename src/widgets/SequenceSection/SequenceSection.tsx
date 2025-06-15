import { Block } from "@/shared/ui/Block";
import { Text } from "@/shared/ui/Text";
import { Box, useTheme } from "@mui/material";
import IconSequence from "@/shared/assets/icons/IconSequence.svg";
import { SequenceForm } from "@/features/SequenceForm";
import { TooltipHelp } from "@/shared/ui/TooltipHelp";

export const SequenceSection = () => {
    const theme = useTheme();

    return (
        <Block>
            <Text textVariant="h2" sx={{ color: theme.palette.custom?.green }}>
                <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    flexWrap="nowrap"
                >
                    <IconSequence />
                    Последовательность
                    <TooltipHelp title="Латинские буквы аминокислот (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ -." />
                </Box>
            </Text>
            <SequenceForm />
        </Block>
    );
};
