import { Grid, TextField, Typography } from "@mui/material";

export default function Chat({userName} : {userName: string}) {
  return (
    <Grid 
      item 
      container
      sx={{
        flex: 2,
        border: '1px solid #AEB6BF',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Grid
        item
        sx={{
          flex: 0.5,
          padding: '10px',
          borderBottom: '1px solid #AEB6BF'
        }}
      >
        <Typography variant="subtitle1">
          {userName ? userName : "User name"}
        </Typography>
      </Grid>
      <Grid
        sx={{
          bgcolor: '#E5E8E8',
          flex: 10,
          padding: 1,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {userName 
          ? 
            "Messages" 
          : 
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              alignSelf: 'center'
            }}
          >
            Choose who you would like to write to...
          </Typography>
        }
      </Grid>
      <Grid
        item
        sx={{
          flex: 0.5,
          padding: 1
        }}
      >
        <TextField
          id="outlined-message-input"
          variant="outlined"
          placeholder="Write your message"
          inputProps={{
            style: {
              padding: 5,
            }
        }}
          sx={{
            borderRadius: '10px',
            backgroundColor: '#E5E8E8',
            '& fieldset': {
              borderRadius: '10px'
            }
          }}
        />
      </Grid>
    </Grid>
  )
}