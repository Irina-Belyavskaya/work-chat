import { getUsers } from "app/api/users";
import { useCallback, useEffect, useState } from "react";
import { UserType } from "./types/user.type";
import { Grid } from "@mui/material";
import SideBar from "./side-bar.component";
import Chat from "./chat.component";

export default function MainPage() {
  const [users, setUsers] = useState<Array<UserType>>();
  const [userName, setUserName] = useState('');
  const setChat = useCallback((name: string)=> {
    setUserName(name);
  },[userName])

  useEffect(() => {
    getUsers()
      .then(({data}) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

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