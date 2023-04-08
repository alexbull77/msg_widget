import React from 'react';
import {TitleBar} from "./TitleBar";
import {Content} from "./Content";
import {ContextLatestMessagesStore, LatestMessagesStore} from "../../mst/store/LatestMessagesStore";
import {CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from '@material-ui/core/styles';

export const LatestMessagesWidget = () => {

    const theme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        },
        palette: {
            primary: {
                main: '#157A7A'
            },
            secondary: {
                main: '#000000'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <ContextLatestMessagesStore.Provider value={LatestMessagesStore}>
                <CssBaseline />
                <div className='container h-365 bg-gray-200 rounded-2xl p-5'>
                    <TitleBar />
                    <Content />
                </div>
            </ContextLatestMessagesStore.Provider>
        </ThemeProvider>
    );
};

