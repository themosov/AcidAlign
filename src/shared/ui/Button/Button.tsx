import {
    Button as MUIButton,
    ButtonProps as MUIButtonProps,
} from "@mui/material";

type ButtonProps = MUIButtonProps;

export const Button = (
    props: ButtonProps,
) => {
    return (
        <MUIButton
            variant="contained"
            sx={{
                background:
                    "linear-gradient(45deg, rgb(46, 125, 50) 30%, rgb(21, 101, 192) 90%)",
                borderRadius: 3,
                textTransform:
                    "uppercase",
                boxShadow: "none",
                fontWeight: 600,
                fontSize: 18,
                px: 4,
                py: 1.5,
                "&.Mui-disabled": {
                    background:
                        "rgb(224,224,224)", // кастомный фон для disabled
                    color: "rgba(0, 0, 0, 0.26)", // кастомный текст для disabled
                    cursor: "not-allowed",
                    opacity: 1, // по умолчанию MUI делает 0.38 — убираем
                },
                ...props.sx,
            }}
            {...props}
        />
    );
};
