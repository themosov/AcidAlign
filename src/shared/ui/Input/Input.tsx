import React, { forwardRef } from "react";
import { FormControl, FormHelperText, Box, TextField } from "@mui/material";

export interface InputProps {
    name: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // новый
    error?: boolean;
    helperText?: string;
    type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            name,
            value,
            placeholder,
            onChange,
            error,
            helperText,
            label,
            onKeyDown,
            type = "text",
        },
        ref,
    ) => {
        return (
            <FormControl fullWidth error={error}>
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label={label}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    type={type}
                    multiline
                    rows={2}
                    inputRef={ref}
                    sx={{
                        backgroundColor: "#FAFAFA",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: error
                                    ? "red"
                                    : "rgba(0, 0, 0, 0.23)",
                            },
                            "&:hover fieldset": {
                                borderColor: error ? "red" : "green",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: error ? "red" : "green",
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: error ? "red" : "inherit",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: error ? "red" : "green",
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
