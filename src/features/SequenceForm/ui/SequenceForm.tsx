import { Box } from "@mui/material";
import { Button } from "@/shared/ui/Button";
import { SequenceLengthAlert } from "@/features/SequenceForm/ui/SequenceLengthAlert";
import { useSequenceForm } from "@/features/SequenceForm/lib/useSequenceForm";
import { SequenceFields } from "@/features/SequenceForm/ui/SequenceFields";
import React from "react";

export const SequenceForm = () => {
    const {
        formData,
        errors,
        inputRef1,
        inputRef2,
        handleChange,
        handleSubmit,
    } = useSequenceForm();

    return (
        <form onSubmit={handleSubmit}>
            <SequenceFields
                formData={formData}
                errors={errors}
                inputRef1={inputRef1}
                inputRef2={inputRef2}
                handleChange={handleChange}
            />
            {errors.lengthMismatch && <SequenceLengthAlert />}
            <Box sx={{ textAlign: "center" }}>
                <Button type="submit">Выровнять</Button>
            </Box>
        </form>
    );
};
