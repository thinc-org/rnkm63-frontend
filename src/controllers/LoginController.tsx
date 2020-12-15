import axios from 'axios';
import { User, Dispatch } from '../components/UserContextProvider';

/////
const chulaSSOApi = "http://localhost:8080"
const backendEndpoint = "http://localhost:5000";
const service = "http://localhost:3000";
/////

type Session = {};
type SimpleCallback = () => void;
type ValidationCallback = (session: Session) => void;

function Connect () {
    window.location.href = chulaSSOApi + "/login?service=" + service + "/processing";
}

function SendTicketToBack(ticket:string, callback: ValidationCallback ) {
    let data = {
        ticket: ticket
    }

    axios.post(backendEndpoint + "/auth/verify", data).then((res) => {
        callback(res.data);
    }).catch((err) => {
        throw new Error(err);
    })
}

function LogOut(callback: SimpleCallback) {
    axios.get(backendEndpoint + "/auth/logout").then((res) => {
        callback();
    }).catch((err) => {
        throw new Error(err);
    })
}

export { Connect, SendTicketToBack, LogOut }