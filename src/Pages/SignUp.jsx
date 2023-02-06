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
import Circle from "../Components/Circle";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import Link

export default function SignUp() {
  const [signupAs, setSignupAs] = useState(0);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [institute, setInstitute] = useState();
  const [contact, setContact] = useState();

  // const signup = (e) => {

  //   const root = 'https://hostelhq.onrender.com'

  //   fetch(`${root}/signup`, {
  //     method : 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       role : signupAs,
  //       name : name.value,
  //       email : email.value,
  //       institute : institute.value,
  //       contact : contact.value,
  //       pass : pass.value,
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(response => signupStatus(response.status, e))

  // }

  const signupStatus = (status) => {
    if (status) {
      <Navigate
        to={
          signupAs.value == 0
            ? "/warden"
            : signupAs.value == 1
            ? "/student"
            : "/staff"
        }
      />;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const root = "http://localhost:5000";

    fetch(`${root}/add-new-user`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: signupAs,
        name: data.get("name"),
        email: data.get("email"),
        institute: data.get("institute"),
        contact: data.get("contact"),
        pass: data.get("pass"),
      }),
    })
      .then((response) => response.json())
      .then((response) => signupStatus(response.status));
  };

  const handleDropDown = (e) => {
    console.log(e.target.value);
    setSignupAs(e.target.value);
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "10px",
              position: "relative",
              borderTop: "4px solid #EB7C3E"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sign Up As
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={signupAs}
                      label={"Login as"}
                      onChange={handleDropDown}
                    >
                      <MenuItem value={0}>Warden</MenuItem>
                      <MenuItem value={1}>Student</MenuItem>
                      <MenuItem value={2}>Staff</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                {signupAs == 1 && (
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-institute"
                      name="institute"
                      required
                      fullWidth
                      id="institute"
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                      label="Institute"
                      autoFocus
                    />
                  </Grid>
                )}

                {signupAs == 1 && (
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="number"
                      name="contact"
                      required
                      fullWidth
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      label="Contact"
                      autoFocus
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="pass"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to SignUp"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item xs>
                  <Link href="login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
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
