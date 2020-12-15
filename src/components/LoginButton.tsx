import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Connect } from '../controllers/LoginController';

interface Props extends WithStyles<typeof styles> {
    className?: string,
    agree?: boolean
}

const styles = {
    root: {
        background: '#44AD53',
        borderRadius: 20,
        border: 0,
        height: 45,
    },
    label: {
        color: "white",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "rubik"
    },
    disabled: {
        background: 'grey'
    }
};

function LoginButton(props: Props) {
    const { classes, className, agree} = props;

    return (
        <Button fullWidth={true} onClick={Connect} disabled={!agree} classes={classes} style={{textTransform: 'none'}}>Login with CUNET account</Button>
    );
}

export default withStyles(styles)(LoginButton)