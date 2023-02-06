import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(key, val) {
  return { key, val };
}

const rows = [
  createData("Name", "Building X"),
  createData("No. of Floors", 12),
  createData("No. of Rooms", 96),
  createData("No. of free rooms", 34),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} bgcolor="black">
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="left">{row.val}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
