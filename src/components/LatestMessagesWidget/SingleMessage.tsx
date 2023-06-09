import React from 'react'
import ChatIcon from '@mui/icons-material/Chat'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import { FunctionsPopover } from './FunctionsPopover'
import { IMessageSnapshotOut } from '../../mst/types/types'
import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'

interface ISingleMessage {
    message: IMessageSnapshotOut
    charsToDisplay: number
}

export const SingleMessage = observer(({ message, charsToDisplay }: ISingleMessage) => {
    return (
        <div className='flex justify-between m-2 mt-5'>
            <div className='flex'>
                <Button
                    onClick={() => {
                        message.toggle()
                    }}
                >
                    {message.isRead ? <ChatIcon color='secondary' /> : <MarkUnreadChatAltIcon color='primary' />}
                </Button>
                <p className='px-6'>{message.timeSent}</p>
                {message.user === undefined ? (
                    <p className='px-4'>Undefined User</p>
                ) : (
                    <p className='px-4'>{`${message.user.firstName} ${message.user.secondName[0]}.`}</p>
                )}
            </div>
            <p>{`${message.description.slice(
                0,
                charsToDisplay >= message.description.length ? message.description.length : charsToDisplay,
            )}...`}</p>
            <FunctionsPopover message={message} />
        </div>
    )
})
