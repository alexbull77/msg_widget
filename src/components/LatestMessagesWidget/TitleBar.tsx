import React from 'react';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import {Button} from "@mui/material";

export const TitleBar = () => {
    return (
        <div className='container flex items-center justify-between'>
            <div className='flex mx-4 my-3'>
                <ListAltOutlinedIcon />
                <div className='font-sans font-medium text-18 leading-23 mt-0.5 ml-6 text-2xl'>
                    <h1>Latest Messages</h1>
                </div>
            </div>
            <div className='mr-8'>
                <Button variant={'outlined'} size={'large'}>
                    Start Chat
                </Button >
            </div>
        </div>
    );
};
