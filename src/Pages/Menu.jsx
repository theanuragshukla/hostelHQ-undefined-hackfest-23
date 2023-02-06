import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import MenuTable from "../Components/MenuTable";


const Menu = () => {
  return (
    <div className="Menu">
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
            <Btn value="Update Menu" />
          </Link>
        </Stack>
      </Box>

          <Box sx={{mt:15, textAlign: "center"}}>
            <h1>Weekly Menu</h1>
          </Box>

      <Box sx={{mt:8}}>
        <MenuTable />
      </Box>
    </div>
  )
}

export default Menu