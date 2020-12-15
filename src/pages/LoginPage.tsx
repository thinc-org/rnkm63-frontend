import React, { useState } from 'react';
import { Box, Card } from '@material-ui/core';
import LoginButton from '../components/LoginButton';
import LoginCheckbox from '../components/LoginCheckbox';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const LoginTitle = withStyles({
    root: {
      color: "white",
      fontFamily: "rubik",
      fontSize: 60,
      fontWeight: 500
    }
  })(Typography);

function LoginPage() {
    const [agree, setAgree] = useState(false);

    function toggleAgree() {
        setAgree(!agree);
    }

    return (
        <Box mx="auto" maxWidth="500px" px="20px">
            <LoginTitle variant="h1">Login</LoginTitle>
            <Card>
                <Box p={3}>
                    <Box fontSize={16} mb={5}>The registration process requires you to authenticate with your CUNET account. To proceed, you need to agree with the following:</Box>
                    <LoginCheckbox update={toggleAgree} />
                    <Box mt={5}>
                        <LoginButton agree={agree}/>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default LoginPage