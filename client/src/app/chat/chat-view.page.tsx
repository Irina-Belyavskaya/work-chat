import { getUsers } from "app/api/users";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserType } from "./types/user.type";
import { Grid } from "@mui/material";
import SideBar from "./side-bar.component";
import Chat from "./chat.component";
import { WebsocketContext } from "contexts/websockets.context";

export default function MainPage() {
  const [users, setUsers] = useState<Array<UserType>>();
  const [userName, setUserName] = useState('');
  const socket = useContext(WebsocketContext);
  
  const setChat = useCallback((name: string, email: string)=> {
    setUserName(name);
    if (users) {
      const user = users.find(user => user.email === email);
      if (user)
        socket.emit('findAllMessages', user.id);
    }    
  },[users])

  useEffect(() => {
    getUsers()
      .then(({data}) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected!');
    })
    // socket.on('onMessage', (response) => {
      
    // })

    // socket.emit('test', 'testing string');
    
    return () => {
      console.log('Disconnect!');
      socket.off('connect');
      socket.off('onMessage');
    }
  },[socket])

  return (
    <>
    { users && 
      <Grid 
        container
        sx={{
          display: 'flex',
          height: '100vh',
        }}
      >
        <SideBar users={users} setChat={setChat}/>
        <Chat userName={userName}/>
      </Grid>
    }  
      
      {/* {
        users && users.map(user => 
          <Grid key={user.id}>
            {user.name}
          </Grid>
        )
      } */}
    </>
  );
}