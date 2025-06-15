import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface ToastProps {
    open: boolean;
    message: string;
    onClose: () => void;
    duration?: number;
}

export const Toast = ({
    open,
    message,
    onClose,
    duration = 2000,
}: ToastProps) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};
