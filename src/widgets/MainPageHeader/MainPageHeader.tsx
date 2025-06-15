import { Text } from "@/shared/ui/Text";
import React from "react";

export const MainPageHeader = () => {
    return (
        <header>
            <Text textVariant="title" sx={{ margin: "4rem 0 1rem" }}>
                🧬 BioCAD Align
            </Text>
            <Text textVariant="caption">
                Инструмент для визуализации выравнивания аминокислотных
                последовательностей
            </Text>
        </header>
    );
};
