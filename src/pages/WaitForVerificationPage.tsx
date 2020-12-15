import React, { useEffect } from 'react';
import { SendTicketToBack } from '../controllers/LoginController';
import { Box } from '@material-ui/core';
import { useCookies } from 'react-cookie';

type Session = {};

function WaitForVerificationPage() {
    const [cookies, setCookie] = useCookies();
    
    useEffect(() => {
        /*
        let query = new URLSearchParams(window.location.search);
        let ticket = query.get('ticket');
        if (ticket != null) {
            SendTicketToBack(ticket, (session: Session) => {
                setCookie("rnkm63Session", session);
                // redirect to main pages
            });
        }
        */
    });

    return (
        <h1>Processing...</h1>
    )
}

export default WaitForVerificationPage