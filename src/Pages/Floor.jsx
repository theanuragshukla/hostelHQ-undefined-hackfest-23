import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Table from "../Components/BuildingTable";
import RoomBox from "../Components/RoomBox";

const Floor = () => {
  return (
    <div className="Floor">
      <Box
        className="navbar"
        position="absolute"
        top={0}
        sx={{
          width: "100%",
          height: "8vh",
          bgcolor: "wheat",
        }}
      >
        <Stack
          direction="row"
          sx={{
            p: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={800}>
            HostelHQ
          </Typography>
          <Link to="/addrooms">
            <Btn value="Add Rooms" />
          </Link>
        </Stack>
      </Box>

      <Box
        className="buildingDetails"
        sx={{
          mt: 15,
        }}
      >
        <Typography variant="h2">Building Name, Floor Number</Typography>
        <Table />
      </Box>

      <Box

        sx={{
          width: "100vw",
          height: "auto",
          mt: 15,
          bgcolor: "coral",
          p: 2,
          scrollX: "auto",
          textAlign:"center"
        }}
      >
        <Typography variant="h3">Existing Rooms</Typography>
<Box
        className="hostelDetails"
        sx={{
          width: "100vw",
          boxSizing: "border-box",
          height: "auto",
          bgcolor: "coral",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          p: 2,
          scrollX: "auto",
        }}
      >
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
        <RoomBox />
      </Box>
      </Box>

    </div>
  );
};

export default Floor;
