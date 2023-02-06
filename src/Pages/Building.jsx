import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Btn from "../Components/Btn";
import Table from "../Components/BuildingTable";
import FloorBox from "../Components/FloorBox";

const Building = () => {
  const [floors, setFloors] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const bid = searchParams.get("bid");
  React.useEffect(() => {
    const bid = searchParams.get("bid");
    if (!bid) location.href = "/warden";
    const getFloors = async () => {
      await fetch("http://localhost:5000/get-floors?bid=" + bid, {
        method: "GET",
        crossdomain: true,
        withCredentials: "include",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setFloors(res);
        });
    };
    getFloors();
  }, []);

  return (
    <div className="Building">
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
          <Link to={`/menu?bid=${bid}`}>
            <Btn value=" Food Menu" />
          </Link>

          <Link to={`/addfloor?bid=${bid}`}>
            <Btn value="Add Floors" />
          </Link>
        </Stack>
      </Box>

      <Box
        className="buildingDetails"
        sx={{
          mt: 15,
        }}
      >
        <Typography variant="h2">Building Name</Typography>
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
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Existing Floors</Typography>
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
          <FloorBox />
          <FloorBox />
          <FloorBox />
          <FloorBox />
          <FloorBox />
          <FloorBox />
        </Box>
      </Box>
    </div>
  );
};

export default Building;
