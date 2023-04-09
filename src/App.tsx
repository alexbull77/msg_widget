import React from 'react'
import './App.css'
import { createTheme } from '@material-ui/core/styles'
import { ContextLatestMessagesStore, LatestMessagesStore } from './mst/store/LatestMessagesStore'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LatestMessagesWidget } from './components/LatestMessagesWidget/LatestMessagesWidget'

export const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none',
        },
    },
    palette: {
        primary: {
            main: '#157A7A',
        },
        secondary: {
            main: '#000000',
        },
    },
})

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <ContextLatestMessagesStore.Provider value={LatestMessagesStore}>
                <CssBaseline />
                <LatestMessagesWidget />
            </ContextLatestMessagesStore.Provider>
        </ThemeProvider>
    )
}
