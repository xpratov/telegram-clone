import { Grid } from "@mui/material";
import Channels from "./components/Channels";


export default function Home() {
  return (
    <Grid sx={{
      width: "100%",
      maxWidth: "1640px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
    }}>
      <Channels/>
    </Grid>
  );
}
