import { getUsers } from "app/api/users";
import { useEffect, useState } from "react";
import { UserType } from "./types/user.type";
import { Grid } from "@mui/material";
import SideBar from "./side-bar.component";
import Chat from "./chat.component";

export default function MainPage() {
  const [users, setUsers] = useState<Array<UserType>>();

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
        style={{
          display: 'flex',
          height: '100vh'
        }}
      >
        <SideBar users={users}/>
        <Chat/>
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