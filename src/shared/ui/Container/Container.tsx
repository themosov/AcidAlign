import {
    Container as MUIContainer,
    ContainerProps as MUIContainerProps,
} from "@mui/material";

export type ContainerProps = MUIContainerProps;

export function Container({ children, ...props }: ContainerProps) {
    return (
        <MUIContainer
            maxWidth="lg"
            disableGutters
            sx={{
                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                },
                ...props.sx,
            }}
            {...props}
        >
            {children}
        </MUIContainer>
    );
}
