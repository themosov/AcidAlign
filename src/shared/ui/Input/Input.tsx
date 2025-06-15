import React, { forwardRef } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    Box,
} from "@mui/material";

export interface InputProps {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { name, label, value, onChange, error, helperText, type = "text" },
        ref,
    ) => {
        return (
            <FormControl fullWidth error={error}>
                <InputLabel
                    htmlFor={name}
                    sx={{
                        "&.Mui-focused": {
                            color: error ? "red" : "green",
                        },
                    }}
                >
                    {label}
                </InputLabel>
                <OutlinedInput
                    autoComplete="false"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                    label={label}
                    inputRef={ref}
                    sx={{
                        backgroundColor: "#FAFAFA",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: error ? "red" : "green",
                        },
                    }}
                />
                <Box sx={{ minHeight: "1.5em" }}>
                    {helperText && (
                        <FormHelperText>{helperText}</FormHelperText>
                    )}
                </Box>
            </FormControl>
        );
    },
);
