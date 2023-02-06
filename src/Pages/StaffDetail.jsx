import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Table from "../Components/Table";

const Student = () => {
  useEffect(() => {
    const verify = async () => {
      await fetch("http://localhost:5000/checkAuth", {
        method: "GET",
        crossdomain: true,
        withCredentials: "include",
      })
        .then((res) => res.json())
        .then((res) => manageAuth(res));
    };
    const manageAuth = (val) => {
      if (!val.result) {
      }
    };
    verify();
  }, []);

  return (
    <div className="Staff">
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
          <Link to="/update-menu">
            <Btn value="Edit Menu" />
          </Link>
        </Stack>
      </Box>

      <Box sx={{ mt: 10, textAlign: "center" }}>
        <h1>Staff Detail</h1>
      </Box>

      <Box
        className="staffDetails"
        sx={{
          mt: 15,
        }}
      >
        <Table />
      </Box>
    </div>
  );
};

export default Student;
