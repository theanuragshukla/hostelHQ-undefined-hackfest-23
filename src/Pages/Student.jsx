import { Box, Stack, Typography, Avatar, Card } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Table from "../Components/Table";
import StudentStatus from "../Components/StudentStatus";

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
    <div className="Student">
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
          <Link to="/complaint">
            <Btn value="Add Complain" />
          </Link>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: 12,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "purple" }}>N</Avatar>
      </Box>

      <Box sx={{ mt: 2, textAlign: "center" }}>
        <h1>Student Detail</h1>
      </Box>

      <Box
        className="studentDetails"
        sx={{
          mt: 15,
        }}
      >
        <Table />
      </Box>

      <Card
        sx={{
          textAlign: "center",
          width: 250,
          height: "auto",
          minHeight: "200px",
          my: 5,
          pt: 4,
          mx: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StudentStatus />
      </Card>
    </div>
  );
};

export default Student;
