import React from "react";
import { Box, Stack, Avatar, Typography, Link } from "@mui/material";
import Btn from "../Components/Btn";
import SignupBtn from "../Components/SignupBtn";

import Circle from "../Components/Circle";
import image from "../../src/hostelImg.svg";
import { bgcolor, border } from "@mui/system";
import bg from "../background.svg";
import buildingBG from "../buildingBG.svg";
import "./Home.css";

const Home = () => {
  return (
    <Box pb={8}>
      <Box sx={{ zIndex: -1, height: "30vh" }}>
        {" "}
        <img src={bg} alt="image" />
      </Box>
      <Box>
        <Box
          className="Home"
          sx={{
            zIndex: 1,
            mt: "-30vh",
            // display:"flex",
            // position: 'absolute',
            top: 0,
          }}
        >
          <Stack
            direction="row"
            sx={{
              p: 1,
              // display:"flex",
              // position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" fontWeight={800} zIndex={2}>
              HostelHQ
            </Typography>

            <Link href="/signup">
              <SignupBtn value="SignUp" />
            </Link>
          </Stack>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          // pl={8}
          flexDirection="row"
          flexWrap="wrap-reverse"
          height="100vh"
          width="100vw"
          overflow="hidden"
          className="body"
          position="relative"
          // bgcolor="rgb(92, 107, 192, 0.4)"
          // border="2px solid red"
        >
          <Box
            // display="flex"
            // justifyContent="center"
            // alignItems="flex-start"
            // flexDirection="column"
            height="400"
            width="400"
            overflow="hidden"
            position="relative"
            // bgcolor="rgb(92, 107, 192, 0.4)"
            // border="2px solid red"
            className="about"
            pl={4}
          >
            <Typography variant="h1" id="heading">
              HostelHQ
            </Typography>
            <Typography variant="h4" mb={2} color="#EB7C3E">
              The complete hostel management system.
            </Typography>

            <Link href="/login">
              <Btn value="Login" />
            </Link>
          </Box>

          <Box height="auto" width="auto" margin={0} className="imageOut">
            <img className="image" src={buildingBG} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
