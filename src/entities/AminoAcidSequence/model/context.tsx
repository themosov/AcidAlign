import React, { createContext, useContext, useState, ReactNode } from "react";
import {
    SequenceContextType,
    SequenceData,
} from "@/entities/AminoAcidSequence/model/types";

const SequenceContext = createContext<SequenceContextType | undefined>(
    undefined,
);

export const SequenceProvider = ({ children }: { children: ReactNode }) => {
    const [sequenceData, setSequenceData] = useState<SequenceData>({
        seq1: "",
        seq2: "",
    });

    return (
        <SequenceContext.Provider value={{ sequenceData, setSequenceData }}>
            {children}
        </SequenceContext.Provider>
    );
};

export const useSequence = (): SequenceContextType => {
    const context = useContext(SequenceContext);
    if (!context) {
        throw new Error("Use sequence data context within a SequenceProvider");
    }
    return context;
};
