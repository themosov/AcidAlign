import React from "react";

interface ResidueProps extends React.HTMLAttributes<HTMLSpanElement> {
    acid: string;
    color?: string;
}

export const Residue = ({ acid, color, ...props }: ResidueProps) => {
    const hasColor = Boolean(color);

    const styles: React.CSSProperties = {
        color: hasColor ? "#000" : "rgb(102, 102, 102)",
        padding: "0.5em 0.5em", // ⬅ может помочь визуально выровнять
        backgroundColor: hasColor ? color : "transparent",
        marginRight: "0.3rem",
        marginBottom: "0.3rem",
        borderRadius: "3px",
        fontWeight: 600,
        fontFamily: "monospace",
        fontSize: "1.2rem",
        border: "1px solid rgb(224, 224, 224)",
    };

    return (
        <span style={styles} {...props}>
            {acid}
        </span>
    );
};
