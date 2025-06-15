import { Alert, SxProps, Theme } from "@mui/material";

interface TipProps {
    sx?: SxProps<Theme>;
}

export const Tip = ({ sx }: TipProps) => {
    return (
        <Alert severity="info" sx={sx}>
            <strong>Совет дня:</strong> для копирования последовательности
            просто выделите ее мышью
        </Alert>
    );
};
