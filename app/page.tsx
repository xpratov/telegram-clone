import { Grid } from "@mui/material";
import Channels from "./components/Channels";
import InnerChannel from "./components/InnerChannel";



export default function Home() {
  return (
    <Grid sx={{
      width: "100%",
      maxWidth: "1640px",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
    }}>
      <Channels/>
      <InnerChannel/>
    </Grid>
  );
}
