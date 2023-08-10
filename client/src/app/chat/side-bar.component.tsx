import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { UserType } from "./types/user.type";

export default function SideBar(
  {users, setChat} : {users: Array<UserType>, setChat: (name: string, email: string) => void}) {

  return (
    <Grid 
      item
      sx={{
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <Typography align="center" gutterBottom={true} variant="h2" mt={2}>
        Work chat
      </Typography>
      <Autocomplete
        freeSolo
        id="search"
        disableClearable
        options={users.map((user) => user.name + ' - '+ user.email)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onChange={(event, value) => {
          const [name, email] = value.split('-').map(el => el.trim());
          setChat(name, email);
        }}
      />
    </Grid>
  )
}