import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

type ProviderProps = {children: React.ReactNode}

function LoginProtected({children}: ProviderProps) {
    const [cookies] = useCookies();

    return (
        <div>{children}</div>
    )
}

export default LoginProtected