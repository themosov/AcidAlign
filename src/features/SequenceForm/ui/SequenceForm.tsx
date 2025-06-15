import { Alert, Box } from "@mui/material";
import { Button } from "@/shared/ui/Button";
import { useSequenceForm } from "@/features/SequenceForm/lib/useSequenceForm";
import React from "react";
import { Input } from "@/shared/ui/Input";
import IconPlay from "@/shared/assets/icons/IconPlay.svg";

export const SequenceForm = () => {
    const {
        formData,
        errors,
        inputRef1,
        inputRef2,
        handleChange,
        handleSubmit,
        handleKeyDown,
    } = useSequenceForm();

    const isButtonDisabled = formData.seq1 === "" || formData.seq2 === "";

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                gap={2}
                flexDirection={{ xs: "column", sm: "row" }}
                marginBottom={errors.lengthMismatch ? 1 : 3}
            >
                <Input
                    ref={inputRef1}
                    name="seq1"
                    label="Последовательность 1"
                    placeholder="AAAGGGAAA"
                    value={formData.seq1}
                    onChange={handleChange}
                    error={!!errors.seq1}
                    helperText={errors.seq1}
                    onKeyDown={handleKeyDown}
                />
                <Input
                    ref={inputRef2}
                    name="seq2"
                    label="Последовательность 2"
                    placeholder="AAAGGGCCC"
                    value={formData.seq2}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    error={!!errors.seq2}
                    helperText={errors.seq2}
                />
            </Box>
            {errors.lengthMismatch && (
                <Alert
                    severity="error"
                    color="warning"
                    sx={{ marginBottom: "2rem" }}
                >
                    Последовательности должны иметь одинаковую длину
                </Alert>
            )}
            <Box display="flex" justifyContent="center">
                <Button
                    icon={<IconPlay />}
                    disabled={isButtonDisabled}
                    type="submit"
                >
                    Выровнять
                </Button>
            </Box>
        </form>
    );
};
