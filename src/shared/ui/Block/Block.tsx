import { Box, BoxProps } from "@mui/material";

export type BlockProps = BoxProps;

export function Block({ sx, ...other }: BlockProps) {
    return (
        <Box
            sx={{
                borderRadius: 2,
                backgroundColor: "background.paper",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
                p: 4,
                ...sx,
            }}
            {...other}
        />
    );
}
