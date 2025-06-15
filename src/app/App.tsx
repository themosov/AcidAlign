import { MainPage } from "@/pages/MainPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/app/styles/theme";
import { SequenceProvider } from "entities/AminoAcidSequence";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SequenceProvider>
                <MainPage />
            </SequenceProvider>
        </ThemeProvider>
    );
};
