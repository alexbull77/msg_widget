import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { LatestMessagesWidget } from './LatestMessagesWidget/LatestMessagesWidget'
import { TitleBar } from './LatestMessagesWidget/TitleBar'
import { Content } from './LatestMessagesWidget/Content'

export default function LatestMessagesWidgetSmall() {
    return (
        <div className='container h-270 w-377 rounded-2xl p-5'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<KeyboardArrowRightIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <TitleBar />
                </AccordionSummary>
                <AccordionDetails>
                    <Content numOfMessages={3} textSize={'xl'} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
