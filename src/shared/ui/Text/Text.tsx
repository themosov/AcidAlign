import { Typography, TypographyProps, SxProps, Theme } from "@mui/material";

type CustomTextVariant = "title" | "h2" | "h3" | "caption" | "error";

export type TextProps = Omit<TypographyProps, "variant"> & {
    textVariant?: CustomTextVariant;
    sx?: SxProps<Theme>;
};

const variantMap: Record<CustomTextVariant, TypographyProps["variant"]> = {
    title: "h1",
    h2: "h2",
    h3: "h3",
    caption: "subtitle1",
    error: "body2",
};

const styleMap: Record<CustomTextVariant, SxProps<Theme>> = {
    title: {
        textAlign: "center",
        fontWeight: 700,
        fontSize: { xs: "2rem", md: "2.2rem" },
        background: "linear-gradient(45deg, #2E7D32 30%, #1565C0 90%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
    },
    caption: {
        fontSize: { xs: "1rem", md: "1.2rem" },
        textAlign: "center",
        lineHeight: "1.2rem",
        fontWeight: 400,
        color: "#666",
    },
    h2: {
        marginBottom: "1.8rem",
        fontSize: { xs: "1.2rem", md: "1.4rem" },
        fontWeight: 700,
    },
    h3: {
        marginBottom: "1.2rem",
        fontSize: { xs: "0.8rem", md: "1.2rem" },
        fontWeight: 600,
    },
    error: {
        fontWeight: 600,
        color: "error.main",
    },
};

export function Text({ textVariant = "title", sx, ...props }: TextProps) {
    const variant = variantMap[textVariant];
    const defaultStyles = styleMap[textVariant];

    return (
        <Typography
            variant={variant}
            sx={[defaultStyles, ...(Array.isArray(sx) ? sx : [sx || {}])]}
            {...props}
        />
    );
}
