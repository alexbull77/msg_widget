import React from 'react'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import { Button, useMediaQuery } from '@mui/material'
import clsx from 'clsx'
import { theme } from '../../App'

interface ITitleBar {
    buttonSize: 'small' | 'medium' | 'large' | undefined
}

export const TitleBar = ({ buttonSize }: ITitleBar) => {
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const textBoxClasses = {
        'font-semibold text-base leading-6 font-source-sans-pro text-xl mx-2': isMobileScreen,
        'font-sans font-medium text-18 leading-23 mt-0.5 ml-6 text-2xl': !isMobileScreen,
    }

    return (
        <div className='container flex items-center justify-between'>
            <div className='flex mx-4 my-3'>
                <ListAltOutlinedIcon />
                <div className={clsx(textBoxClasses)}>
                    <h1>Latest Messages</h1>
                </div>
            </div>
            <div className='mr-8'>
                <Button variant={'outlined'} size={buttonSize}>
                    Start Chat
                </Button>
            </div>
        </div>
    )
}
