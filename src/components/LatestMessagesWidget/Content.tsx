import React, {useEffect} from 'react';
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {LatestMessagesStore, useLatestMessagesStore} from "../../mst/store/LatestMessagesStore";
import {observer} from "mobx-react-lite";
import {IMessageSnapshotOut} from "../../mst/types/types";

export const Content = observer(() => {
    const {  fetchUsers, fetchMessages, latestMessagesForWidget } = useLatestMessagesStore()

    useEffect(() => {
        fetchUsers()
        fetchMessages()
    }, [])

    return (
        <>
            {
                LatestMessagesStore.latestMessagesForWidget.length === 0 ? (
                    <div>
                        <p>No messages yet</p>
                    </div>
                    ) : (
                    LatestMessagesStore.latestMessagesForWidget
                            .map((message: IMessageSnapshotOut) => {
                            return (
                                <>
                                    <div className='flex justify-between m-5' key={message.id}>
                                        <div className='flex'>
                                            {
                                                message.isRead ? (
                                                    <ChatIcon />
                                                ) : (
                                                    <MarkUnreadChatAltIcon />
                                                )
                                            }
                                            <p className='px-6'>{message.timeSent}</p>
                                            {
                                                message.user === undefined ? (
                                                    <p className='px-4'>Undefined User</p>
                                                ) : (
                                                    <p className='px-4'>{`${message.user.firstName} ${message.user.secondName[0]}.`}</p>
                                                )
                                            }
                                        </div>
                                        <p>{`${message.description.slice(0, 35)}...`}</p>
                                        <MoreVertOutlinedIcon />
                                    </div>
                                    <hr
                                        style={{
                                            background: '#7A899E',
                                            color: '#7A899E',
                                            borderColor: '#7A899E',
                                            height: '1px',
                                        }}
                                    />
                                </>
                            )
                        })
                    )
            }
        </>
    )
})