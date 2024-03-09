import { io } from 'socket.io-client';
import { SERVER_URL } from "./constants";
// "undefined" means the URL will be computed from the `window.location` object


export const socket = io(SERVER_URL);
