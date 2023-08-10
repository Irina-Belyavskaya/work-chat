import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { UserType } from "./types/user.type";
import { useState } from "react";
import theme from "theme";

export default function SideBar(
  {users, setChat} : {users: Array<UserType>, setChat: (name: string) => void}) {
  const [inputText, setInputText] = useState('');

  return (
    <Grid 
      item
      sx={{
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        padding: '10px',
        // height:'100%'
      }}
    >
      <Typography align="center" gutterBottom={true} variant="h2" mt={2}>
        Work chat
      </Typography>
      <Autocomplete
        freeSolo
        id="search"
        disableClearable
        options={users.map((user) => user.name)}
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
        value={inputText}
        onChange={(event, value) => {
          // setInputText(value);
          setChat(value);
          // if (inputText.length === 0)
          //   setIsSearch(false);
        }}
      />
      {/* <Button 
        sx={{
          marginTop: 'auto',
          alignSelf: 'flex-start',
          bgcolor: theme.palette.primary.main,
          color: 'white',
          '&:hover': {
            color: 'white',
            bgcolor: theme.palette.primary.light
          }
        }}
      >
        Create chat
      </Button> */}
    </Grid>
  )
}