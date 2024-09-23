import { Alert, Snackbar } from '@mui/material'
import React from 'react'

type TSnackbar = {
    open: boolean;
    message: string;
}

type TProps = {
    snackbar: TSnackbar;
    handleCloseSnackbar: () => void;
}

export default function WarningSnackbar({ snackbar, handleCloseSnackbar }: TProps) {
    return (
        <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                onClose={handleCloseSnackbar}
                severity="warning"
                variant="filled"
                sx={{ width: '100%', alignItems: "center" }}
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
    )
}
