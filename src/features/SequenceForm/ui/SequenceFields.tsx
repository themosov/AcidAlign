import { Box } from "@mui/material";
import { Input } from "@/shared/ui/Input";

export const SequenceFields = ({
    formData,
    errors,
    inputRef1,
    inputRef2,
    handleChange,
}: any) => (
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
            value={formData.seq1}
            onChange={handleChange}
            error={!!errors.seq1}
            helperText={errors.seq1}
        />
        <Input
            ref={inputRef2}
            name="seq2"
            label="Последовательность 2"
            value={formData.seq2}
            onChange={handleChange}
            error={!!errors.seq2}
            helperText={errors.seq2}
        />
    </Box>
);
