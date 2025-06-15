import { MainPage } from "@/pages/MainPage";
import { ThemeProvider } from "@mui/material";
import theme from "@/app/styles/theme";
import { SequenceProvider } from "entities/AminoAcidSequence";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SequenceProvider>
                <MainPage />
            </SequenceProvider>
        </ThemeProvider>
    );
};
