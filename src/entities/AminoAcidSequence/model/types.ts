export interface SequenceData {
    seq1: string;
    seq2: string;
}

export interface SequenceContextType {
    sequenceData: SequenceData;
    setSequenceData: (data: SequenceData) => void;
}
