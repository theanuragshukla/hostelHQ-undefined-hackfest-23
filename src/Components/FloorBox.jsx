import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ floor }) {
  return (
    <Card
      sx={{
        width: 250,
        height: "auto",
        minHeight: "200px",
        m: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderTop: "2px solid #EB7C3E"
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Floor number : X
        </Typography>
        <Typography variant="body2">12Rooms</Typography>
        <Typography variant="body2">status : not free</Typography>
      </CardContent>
      <CardActions>
        <Link href="/floor">
          <Button size="small">View Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
