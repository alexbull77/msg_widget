import React, { useEffect } from 'react'
import { LatestMessagesStore, useLatestMessagesStore } from '../../mst/store/LatestMessagesStore'
import { observer } from 'mobx-react-lite'
import { IMessage } from '../../mst/types/types'
import { EmptyWidget } from './EmptyWidget'
import { Button } from '@mui/material'
import { SingleMessage } from './SingleMessage'
import clsx from 'clsx'

interface ContentProps {
    numOfMessages: number
    textSize: string
}

export const Content = observer(({ numOfMessages, textSize }: ContentProps) => {
    const { isEmpty, fetchUsers, fetchMessages } = useLatestMessagesStore()

    useEffect(() => {
        // users should probably get fetched somewhere else
        fetchUsers()
        fetchMessages()
    }, [])

    return (
        <div className='mt-12'>
            {isEmpty() ? (
                <EmptyWidget />
            ) : (
                LatestMessagesStore.getLatestMessagesForWidget(numOfMessages).map((message: IMessage) => {
                    return (
                        <div key={message.id}>
                            <SingleMessage message={message} />
                            <hr
                                style={{
                                    background: '#7A899E',
                                    color: '#7A899E',
                                    borderColor: '#7A899E',
                                    height: '0.5px',
                                }}
                            />
                        </div>
                    )
                })
            )}
            <div className='mt-5'>
                <Button href='#redirect'>See all</Button>
            </div>
        </div>
    )
})
