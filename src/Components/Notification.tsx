import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FirebaseNotification } from './Servises/FirebaseNotification';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    btn:{
        fontWeight: 'bolder',
        fontSize: '15px'
    }
}));

export const Notification = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                className={classes.btn}
                onClick={FirebaseNotification}
                variant="outlined" color="primary">
                Allow Notifications?
            </Button>
        </div>
    )
}
