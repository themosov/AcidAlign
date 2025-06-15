import React, { useState, useRef } from "react";
import { SequenceData, useSequence } from "entities/AminoAcidSequence";
import { isValidSequence } from "@/features/SequenceForm/lib/isValidSequence";

export const useSequenceForm = () => {
    const [formData, setFormData] = useState<SequenceData>({
        seq1: "",
        seq2: "",
    });
    const [errors, setErrors] = useState<{
        seq1?: string;
        seq2?: string;
        lengthMismatch?: boolean;
    }>({});

    const inputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const { setSequenceData } = useSequence();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.toUpperCase(),
        }));
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const validate = () => {
        const { seq1, seq2 } = formData;
        setSequenceData({ seq1: "", seq2: "" });
        const newErrors: typeof errors = {};

        const checkField = (key: keyof SequenceData, label: string) => {
            const value = formData[key];
            if (!value) newErrors[key] = "Обязательное поле";
            else if (!isValidSequence(value))
                newErrors[key] = "Недопустимые символы";
        };

        checkField("seq1", "Последовательность 1");
        checkField("seq2", "Последовательность 2");

        if (seq1 && seq2 && seq1.length !== seq2.length) {
            newErrors.lengthMismatch = true;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSequenceData(formData);
        inputRef1.current?.blur();
        inputRef2.current?.blur();
        setFormData({ seq1: "", seq2: "" });
    };

    return {
        formData,
        errors,
        inputRef1,
        inputRef2,
        handleChange,
        handleSubmit,
        handleKeyDown,
    };
};
