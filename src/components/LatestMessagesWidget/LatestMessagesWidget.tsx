import React from 'react'
import { TitleBar } from './TitleBar'
import { Content } from './Content'
import clsx from 'clsx'
import AccordionSummary from '@mui/material/AccordionSummary'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import { useMediaQuery } from '@mui/material'
import { theme } from '../../App'

export const LatestMessagesWidget = () => {
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const containerClasses = {
        'h-365 w-1194': isMobileScreen,
        'h-270 w-377': !isMobileScreen,
    }

    return (
        <div className={clsx('container rounded-2xl p-5', containerClasses)}>
            {!isMobileScreen ? (
                <>
                    <TitleBar buttonSize={'large'} />
                    <Content numOfMessages={6} charsToDisplay={55} />
                </>
            ) : (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<KeyboardArrowRightIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <TitleBar buttonSize={'medium'} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Content numOfMessages={3} charsToDisplay={20} />
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    )
}
