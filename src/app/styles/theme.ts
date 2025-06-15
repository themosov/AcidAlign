import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        custom?: {
            greenGradient: string;
            green?: string;
            blue?: string;
        };
    }

    interface PaletteOptions {
        custom?: {
            greenGradient: string;
            green?: string;
            blue?: string;
        };
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
    },
    palette: {
        custom: {
            greenGradient: "linear-gradient(45deg, #2E7D32 30%, #1565C0 90%)",
            green: "rgb(46, 125, 50)",
            blue: "rgb(21, 101, 192)",
        },
    },
});

export default theme;
