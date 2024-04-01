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
import { dataContext } from '../layout';



const Channels = () => {
  const [data, setData]=useState<any[]>()
  const [selectedChannel, setSelectedChannel]=useState<number|null>(null)
  const [contekst, setContekst]=useState(dataContext)

  useEffect(()=>{
    async function  getData() {
      const res=await fetch("/data.json")
      const data=await res.json()  
      console.log(data);
      
      setData(data)
    }
    getData()
  },[])
  
  const handleChannel=(id:number)=>{
    setSelectedChannel(id)
    // setContekst(id)
    
  }
  return (
    <Grid sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #303030",
    }}>
      <List sx={{ width: '100%', height:"100%", padding: "10px"}}>
      <h1 style={{paddingLeft: "15px"}}>All</h1>
      {data?.map((el:any) => (
      <>
      <ListItem onClick={()=>{handleChannel(el.id)}} key={el.id} alignItems="flex-start" sx={{width: "100%",borderRadius: "10px",bgcolor:`${selectedChannel==el.id?"#766AC8":""}`, ":hover":{bgcolor: "#2C2C2C",cursor: 'pointer'}}}>
        <ListItemAvatar>
          <Avatar alt="avatar" src={el.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={el.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#e8e8e8"
              >
                Last messages
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      ))}
    </List>
    </Grid>
  )
}

export default Channels

