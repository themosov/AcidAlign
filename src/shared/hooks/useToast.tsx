import { useState, useCallback, useEffect } from "react";

export const useToast = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const showToast = useCallback((msg: string) => {
        setMessage(msg);
        setOpen(true);
    }, []);

    const closeToast = useCallback(() => {
        setOpen(false);
    }, []);

    // useEffect(() => {
    //     if (open) {
    //         const timer = setTimeout(() => {
    //             setOpen(false);
    //         }, 1000);
    //
    //         return () => clearTimeout(timer);
    //     }
    // }, [open]);

    return { open, message, showToast, closeToast };
};
