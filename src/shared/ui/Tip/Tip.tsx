import { Alert, SxProps, Theme } from "@mui/material";

interface TipProps {
    sx?: SxProps<Theme>;
    message: string;
}

export const Tip = ({ sx, message }: TipProps) => {
    return (
        <Alert
            severity="info"
            sx={{
                ...sx,
                "& .MuiAlert-message": {
                    textAlign: "justify",
                    textJustify: "inter-character",
                    lineHeight: 1.2,
                },
            }}
        >
            <strong>Совет:</strong> {message}
        </Alert>
    );
};
