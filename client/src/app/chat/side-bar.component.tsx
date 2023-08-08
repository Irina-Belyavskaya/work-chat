import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { UserType } from "./types/user.type";
import { useState } from "react";

export default function SideBar({users} : {users: Array<UserType>}) {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState<string[]>([]);

  return (
    <Grid 
      item
      style={{}}
    >
      <Typography>Work chat</Typography>
      {/* <Autocomplete
          data-elem="search-input"
          value={inputText}
          data={data}
          size='md'
          radius={'8px'}
          onChange={(inputText) => {
            setInputText(inputText);
            if (inputText.length === 0)
              setIsSearch(false);
          }}
          icon={<IconSearch />}
          rightSection={
            <Button
              data-elem="search-button"
              size="xs"
              sx={{
                padding: '4px 20px',
                borderRadius: '8px',
                marginRight: '52px'
              }}
              onClick={() => findVacance()}
            >
              Поиск
            </Button>
          }
          placeholder="Введите название вакансии"
          sx={{ width: '100%', height: '48px' }}
        /> */}

      <Autocomplete
        freeSolo
        id="search"
        disableClearable
        options={users.map((user) => user.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Grid>
  )
}