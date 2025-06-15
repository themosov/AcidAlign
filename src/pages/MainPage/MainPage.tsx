import { Stack } from "@mui/material";
import React from "react";
import { MainPageHeader } from "@/widgets/MainPageHeader";
import { Container } from "@/shared/ui/Container";
import { SequenceSection } from "@/widgets/SequenceSection";
import { AligmentSection } from "@/widgets/AligmentSection";
import { useSequence } from "entities/AminoAcidSequence";

export const MainPage = () => {
    const {
        sequenceData: { seq1, seq2 },
    } = useSequence();
    return (
        <Container>
            <MainPageHeader />
            <Stack spacing={2} sx={{ margin: "4rem 0 3rem 0" }}>
                <SequenceSection />
                {seq1 && seq2 && <AligmentSection />}
            </Stack>
        </Container>
    );
};
