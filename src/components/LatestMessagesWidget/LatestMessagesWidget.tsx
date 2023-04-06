import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ChatIcon from '@mui/icons-material/Chat';
import {TitleBar} from "./TitleBar";
import {Content} from "./Content";
import {ContextLatestMessagesStore, LatestMessagesStore} from "../../mst/store/LatestMessagesStore";

export const LatestMessagesWidget = () => {

    useEffect(() =>{
        // console.log(users)
    }, [])

    return (
        <ContextLatestMessagesStore.Provider value={LatestMessagesStore}>
            <div className='container'>
                <TitleBar />
                <Content />
            </div>
        </ContextLatestMessagesStore.Provider>
    );
};

