import React, { useEffect } from "react";

export const useCopyOnSelect = (
    containerRef: React.RefObject<HTMLElement>,
    showToast: (msg: string) => void,
) => {
    useEffect(() => {
        const handleMouseUp = () => {
            const selection = window.getSelection();
            if (!selection || !containerRef.current) return;

            const selectedText = selection.toString().trim();
            if (!selectedText) return;

            const range = selection.getRangeAt(0);
            const isInside = containerRef.current.contains(
                range.commonAncestorContainer,
            );

            if (isInside) {
                navigator.clipboard
                    .writeText(selectedText)
                    .then(() => showToast("Последовательность скопирована"))
                    .catch(() =>
                        showToast("Не удалось скопировать последовательность"),
                    );
            }
        };

        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [containerRef, showToast]);
};
