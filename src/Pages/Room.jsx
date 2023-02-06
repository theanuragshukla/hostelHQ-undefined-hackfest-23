import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Table from "../Components/BuildingTable";
import RoomDetailsBox from "../Components/RoomDetailsBox";
import RoomStudentDetailsBox from "../Components/RoomStudentDetailsBox";

const Room = () => {
  return (
    <div className="Room">
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
          <Box display="flex" gap={2}>
            <Link to="/allocate">
              <Btn value="Allocate room" />
            </Link>

            <Link to="/deallocate">
              <Btn value="Deallocate room" />
            </Link>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RoomDetailsBox />
      </Box>

      <Box
        sx={{
          width: "100vw",
          height: "auto",
          mt: 15,
          bgcolor: "coral",
          p: 2,
          scrollX: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Student Details</Typography>
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
          <RoomStudentDetailsBox />
          <RoomStudentDetailsBox />
          <RoomStudentDetailsBox />
          <RoomStudentDetailsBox />
          <RoomStudentDetailsBox />
          <RoomStudentDetailsBox />
        </Box>
      </Box>
    </div>
  );
};

export default Room;
