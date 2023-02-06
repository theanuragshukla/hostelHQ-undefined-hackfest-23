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

export default function BasicCard({ data }) {
  return (
    <Card
      sx={{
        width: 250,
        height: "auto",
        minHeight: "200px",
        borderRadius: "15",
        m: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "&:hover": { bgcolor: "#DEDEDE" },
        transition: "0.4s",
        borderTop: "2px solid #EB7C3E"
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2">
          {Math.floor(Math.random() * 10 + 1)} Floors
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/building?bid=${data.uid}`}>
          <Button size="small" sx={{ textAlign: "end" }}>
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
