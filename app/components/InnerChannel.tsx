'use client'
import { Box, Grid, Input } from '@mui/material'
import React, {useState, useEffect} from 'react'

const messages= [
  "Giveaway Prizes 10000 Telegram Premium subscriptions for 12 months Participants All subscribers of the channel: WeWantYou Winners Selection Date Apr 4, 2024, 22:00",
  "Giveaway Prizes 10000 Telegram Premium subscriptions for 12 months Participants All subscribers of the channel: WeWantYou Winners Selection Date Apr 3, 2024, 22:00",
  "У нас хорошие новости. Есть задача довести канал до 2.5 миллионов подписчиков. А если есть задача, значит есть и бюджет. И мы собираемся сделать кое-что невероятное. Возможно, такого больше никогда не случится и вы сейчас являетесь свидетелями уникального события. Следующие 14 дней мы будем разыгрывать 10 тысяч годовых подписок. Внимание! Каждый день. Каждый, чорт его дери, день. Каждый. Не через день, а каждый день.  Вы правильно прочитали? Каждый день. Каждыыыыййй день.  Вы осознаете вообще? Сто сорок тысяч годовых подписок. 140 000 годовых подписок. СТО 40 ТЫСЯЧ. Мы сами не верим. Хватит говорить. Пора делать!"
]

const InnerChannel = () => {
  const [data, setData]=useState([])
  console.log(data);
  
  
  useEffect(()=>{
    async function  getData() {
      const res=await fetch("/data.json")
      const data=await res.json()       
      setData(data)
    }
    getData()
  },[])
  
  return (
    <Grid sx={{display: "grid",
              flexDirection: "column",
              padding: "15px",
              backgroundImage: "url('/bg-tg.webp')"
              }}>
      <Grid sx={{display: "flex",
                flexDirection: "column",
                gap: "15px"}}>
        {messages.map((msg) => (
        <div key={Math.random()} style={{
          maxWidth: "400px",
          backgroundColor: "#212121",
          borderRadius: "10px",
          padding: "15px"
        }}>
          <p>{msg}</p>
        </div> 
        ))}
      </Grid>
      <Input placeholder="Xabar kiriting..." sx={{color: "#fff", bgcolor: "#212121"}}/>
    </Grid>
  )
}

export default InnerChannel
