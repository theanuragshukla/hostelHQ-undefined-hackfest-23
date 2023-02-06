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
import Circle2 from "../Components/Circle2";
import { padding, positions } from "@mui/system";

export default function LogIn() {
  const [breakfast, setBreakfast] = useState("");
  const [dinner, setDinner] = useState("");
  const [lunch, setLunch] = useState("");

  const [chooseDay, setChooseDay] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const root = "http://localhost:5000";

    fetch(`${root}/let-me-in`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: loginAs,
        pass: data.get("pass"),
        email: data.get("email"),
      }),
    })
      .then((response) => response.json())
      .then((response) => loginStatus(response.status));

    const loginStatus = (status) => {
      if (status) {
        location.href =
          loginAs == 0 ? "/warden" : loginAs == 1 ? "/student" : "/staff";
      }
    };
  };

  const handleDropDown = (e) => {
    console.log(e.target.value);
    setloginAs(e.target.value);
  };

  return (
    <Box overflow="hidden" position="relative">
      <Box
        sx={{
          height: "100vh",
          bgcolor: "rgb(92, 107, 192, 0.4)",
          display: "flex",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            padding={4}
            zIndex={2}
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Menu
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={chooseDay}
                  label={"Choose Day"}
                  onChange={handleDropDown}
                >
                  <MenuItem value={0}>Sunday</MenuItem>
                  <MenuItem value={1}>Monday</MenuItem>
                  <MenuItem value={2}>Tuesday</MenuItem>
                  <MenuItem value={3}>Wednesday</MenuItem>
                  <MenuItem value={4}>Thursday</MenuItem>
                  <MenuItem value={5}>Friday</MenuItem>
                  <MenuItem value={6}>Saturday</MenuItem>
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                id="breakfast"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                label="breakfast"
                name="breakfast"
                autoComplete="name"
                // autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="lunch"
                label="lunch"
                type="lunch"
                id="lunch"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
                autoComplete="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="dinner"
                label="dinner"
                type="dinner"
                id="dinner"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
                autoComplete="name"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Add menu"
              />
              <Button
                type="submit"
                id="SignInBtn"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
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
