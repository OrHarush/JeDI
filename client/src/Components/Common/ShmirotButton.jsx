import React from 'react'
import { Button } from '@mui/material'
import Column from '../Layout/Column';
import Text from './Text';
import { shmirot } from './Shmirot';

const ShmirotButton = (props) => {
    let shmira = null;
    let date = (props.row) * 7 + (1+props.col);

    if (date > 31) {
        date = -1;
    }

    if (date < 32 && date > 0) {
        shmira = shmirot[date];
    }

    return (
        <Button variant="contained" key={`${props.row}, ${props.col}`}
            sx={{
                '&:hover': {
                    backgroundColor: '#c5c5c5',
                    color: '#3c52b2'
                },
                width: 'calc(100vw/7)', justifyContent: "start", alignItems: "start",
                height: "calc((100vh - 60px)/6)", borderRadius: "0", backgroundColor: "white"
            }}>
            {date !== -1 &&
                <Column justifyContent="start" alignItems="start">
                    <Text text={date} />
                    {shmira !== null && props.isClicked &&
                        <Column>
                            <Text fontSize="12px" text={shmira.mefaked} />
                            <Text fontSize="12px" text={shmira.shomer} />
                            <Text fontSize="10px" text={shmira.yohalam} />
                            <Text fontSize="10px" text={shmira.konan1} />
                        </Column>
                    }
                </Column>}
        </Button>
    );
}

export default ShmirotButton;