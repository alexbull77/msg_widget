import React from 'react'
import { TitleBar } from './TitleBar'
import { Content } from './Content'

export const LatestMessagesWidget = () => {
    return (
        <div className='container h-365 bg-white rounded-2xl p-5'>
            <TitleBar />
            <Content numOfMessages={6} textSize={'3xl'} />
        </div>
    )
}
