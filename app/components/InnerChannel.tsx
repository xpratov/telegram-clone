import { Grid } from '@mui/material'
import React from 'react'
import { dataContext } from '../layout'

const InnerChannel = () => {
  console.log(dataContext);
  
  return (
    <Grid>
      <h2>messages, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ipsam eaque ullam molestiae, velit eos iste itaque nobis beatae nam soluta perferendis aspernatur porro repellendus expedita quod fugiat. Reprehenderit nulla aspernatur expedita alias? Laudantium reiciendis earum tenetur, consequatur saepe praesentium.</h2>
    </Grid>
  )
}

export default InnerChannel
