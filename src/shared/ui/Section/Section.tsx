import { BlockProps } from "@/shared/ui/Block";
import { Box } from "@mui/material";

type SectionProps = BlockProps;

export const Section = ({ sx, ...other }: SectionProps) => {
    return (
        <Box
            sx={{
                border: "2px solid rgb(232, 245, 232)",
                borderRadius: 2,
                backgroundColor: "rgb(250, 250, 250)",
                p: 2,
                ...sx,
            }}
            {...other}
        />
    );
};
