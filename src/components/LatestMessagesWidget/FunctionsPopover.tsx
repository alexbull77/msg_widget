import React from 'react';
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {Button, Popover} from "@mui/material";
import {observer} from "mobx-react-lite";
import {IMessage} from "../../mst/types/types";

export const FunctionsPopover = observer(({ message } : { message: IMessage }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <>
            <Button onClick={handleClick}>
                <MoreVertOutlinedIcon />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className='flex flex-col items-center'>
                    <Button onClick={() => {
                        message.toggle()
                        handleClose()
                    }}>
                        {
                            message.isRead ? (
                                <p>Mark as unread</p>
                            ): (
                                <p>Mark as read</p>
                            )
                        }
                    </Button>
                    <Button>Reply</Button>
                    <Button onClick={() => {
                        message.delete()
                        handleClose()
                    }}>
                        Delete Message
                    </Button>
                </div>
            </Popover>
        </>
    );
})
