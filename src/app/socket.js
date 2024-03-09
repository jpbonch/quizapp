import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object


const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : "3.19.155.188"; 
export const socket = io(URL);
