'use client'
import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import getData from '../api/getData';



const Channels = () => {
  const [data, setData]=useState<object>()

  useEffect(()=>{
    const data=getData()
    setData(data)
  },[])
  
  return (
    <Grid sx={{
      width: "100px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      {data?.map((el:object) => (
      <List sx={{ width: '100%'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={el.} src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
    ))}
    </Grid>
  )
}

export default Channels
