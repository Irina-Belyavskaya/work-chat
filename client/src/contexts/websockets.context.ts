import {io, Socket} from 'socket.io-client';
import { createContext } from 'react';
import Cookies from "js-cookie";

export const socket = io('http://localhost:5000', 
{transportOptions: {
  polling: {
      extraHeaders: {
          Authorization: 'Bearer ' + Cookies.get('access_token'),
      }
  }
}}
);
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;

// {
//   query: {token: Cookies.get('access_token')}
// }