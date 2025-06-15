export const isValidSequence = (seq: string) => {
    const allowedSymbolsRegex = /^[ARNDCEQGHILKMFPSTWYV\-]+$/i;
    return allowedSymbolsRegex.test(seq);
};
