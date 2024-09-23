import { useState } from 'react';

const snackbarInit = {
    open: false,
    message: ""
}

export default function useSnackbar() {
    const [snackbar, setSnackbar] = useState(snackbarInit);

    function handleCloseSnackbar() {
        setSnackbar(state => ({ ...state, open: false }));
    }

    function handleOpenSnackbar({ message = "" }: { message: string }) {
        setSnackbar({ open: true, message });
    }

    return {
        snackbar,
        setSnackbar,
        handleCloseSnackbar,
        handleOpenSnackbar
    }
}