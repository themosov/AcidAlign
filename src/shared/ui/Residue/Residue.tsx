import { Box, Typography } from "@mui/material";

interface ResidueProps {
    acid: string;
    color?: string;
}

export const Residue = ({ acid, color }: ResidueProps) => {
    return (
        <Box
            sx={{
                border: "1px solid rgb(224, 224, 224)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: color ?? "rgb(245, 245, 245)",
                width: "2.4rem",
                height: "2.4rem",
            }}
        >
            <Typography
                sx={{
                    color: color ? "#000" : "rgb(102, 102, 102)",
                    fontWeight: 600,
                }}
            >
                {acid}
            </Typography>
        </Box>
    );
};
