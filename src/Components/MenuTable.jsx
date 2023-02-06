import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Day, Breakfast, Lunch, Dinner) {
  return { Day, Breakfast, Lunch, Dinner };
}

const rows = [
  createData("Day1", "Roti Daal", "Chola puri", "litti chokha"),
  createData("Day2", "Roti Daal", "Chola puri", "litti chokha"),
  createData("Day3", "Roti Daal", "Chola puri", "litti chokha"),
  createData("Day4", "Roti Daal", "Chola puri", "litti chokha"),
  createData("Day5", "Roti Daal", "Chola puri", "litti chokha"),
  createData("Day6", "Roti Daal", "Chola puri", "litti chokha"),
  createData("Day7", "Roti Daal", "Chola puri", "litti chokha"),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ padding: "20px", maxWidth: "650px", margin: "auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Days</TableCell>
            <TableCell align="right">Breakfast</TableCell>
            <TableCell align="right">Lunch</TableCell>
            <TableCell align="right">Dinner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Day}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Day}
              </TableCell>
              <TableCell align="right">{row.Breakfast}</TableCell>
              <TableCell align="right">{row.Lunch}</TableCell>
              <TableCell align="right">{row.Dinner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
