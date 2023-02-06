import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Table from "../Components/Table";
import BuildingBox from "../Components/BuildingBox";

const Warden = () => {
  const [prof, setProf] = useState({
    data: {
      name: "Anurag",
      Email: "www.anuragshukla@gmail.com",
      phone: "7068179922",
    },
  });
  const [buildings, setBuildings] = useState();
  useEffect(() => {
    const verify = async () => {
      await fetch("http://localhost:5000/checkAuth?role=0", {
        method: "GET",
        crossdomain: true,
        withCredentials: "include",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          setProf(res);
          if (!res.result) {
            location.href = "/login";
          }
        });
    };

    const getBuildings = async () => {
      await fetch("http://localhost:5000/get-buildings", {
        method: "GET",
        crossdomain: true,
        withCredentials: "include",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setBuildings(res);
        });
    };
    verify();
    getBuildings();
  }, []);

  return (
    <div className="Warden">
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
          <Link to="/addbuilding">
            <Btn value="Add Building" />
          </Link>
        </Stack>
      </Box>

      <Box
        className="wardenDetails"
        sx={{
          mt: 15,
        }}
      >
        <Typography variant="h2">Warden Profile</Typography>
        {prof && <Table prof={prof} />}
      </Box>

      <Box
        sx={{
          width: "100vw",
          boxSizing: "border-box",
          height: "auto",
          mt: 15,
          bgcolor: "coral",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h3">Existing Buildings</Typography>

        <Box
          className="hostelDetails"
          sx={{
            width: "100vw",
            boxSizing: "border-box",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            p: 2,
            scrollX: "auto",
          }}
        >
          {buildings &&
            buildings.map((building) => <BuildingBox data={building} />)}
        </Box>
      </Box>
    </div>
  );
};

export default Warden;
