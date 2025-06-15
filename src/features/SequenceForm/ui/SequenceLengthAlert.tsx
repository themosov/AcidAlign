import { Alert, Box } from "@mui/material";
import React from "react";

export const SequenceLengthAlert = () => {
    return (
        <Box marginBottom={2}>
            <Alert severity="error" color="warning">
                Последовательности должны иметь одинаковую длину
            </Alert>
        </Box>
    );
};
