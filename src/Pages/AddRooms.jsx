import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Circle from "../Components/Circle";

export default function AddRooms() {
  const [loginAs, setloginAs] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleDropDown = (e) => {
    console.log(e.target.value);
    setloginAs(e.target.value);
  };

  return (
    <Box  overflow="hidden" position="relative">
    <Box sx={{height:"100vh", bgcolor:"rgb(92, 107, 192, 0.4)",display:"flex" }}>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
       padding={4} 
       zIndex={2}
       position="relative"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor:"#fff",
          borderRadius:"10px",
          borderTop: "4px solid #EB7C3E"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Room
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          

          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Building Name"
            name=""
            autoComplete=""
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Floor Number"
            name=""
            autoComplete=""
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Room Number"
            name=""
            autoComplete=""
            autoFocus
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Sure to add a new rooms"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Building
          </Button>
          
        </Box>
      </Box>
    </Container>
    </Box>
       <Circle x={-100} y={-65} r={130} />
        <Circle a={-150} b={-200} r={250} />
        <Circle a={350} b={200} r={10} />
    </Box>

      
  );
}

