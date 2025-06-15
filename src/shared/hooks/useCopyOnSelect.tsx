import { useEffect, RefObject } from "react";

export const useCopyOnSelect = (
    containerRef: RefObject<HTMLElement>,
    showToast: (msg: string) => void,
) => {
    useEffect(() => {
        const handleMouseUp = () => {
            if (!containerRef.current) return;

            const selection = window.getSelection();
            if (!selection) return;

            const selectedText = selection.toString().trim();

            if (
                selectedText &&
                containerRef.current.contains(selection.anchorNode)
            ) {
                navigator.clipboard
                    .writeText(selectedText)
                    .then(() => {
                        showToast("Выделенный текст скопирован!");
                    })
                    .catch(() => {
                        showToast("Не удалось скопировать текст");
                    });
            }
        };

        const current = containerRef.current;
        current?.addEventListener("mouseup", handleMouseUp);

        return () => {
            current?.removeEventListener("mouseup", handleMouseUp);
        };
    }, [containerRef, showToast]);
};
