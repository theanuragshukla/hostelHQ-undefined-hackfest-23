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

export default function BasicTable({
  prof = { data: { name: "Manish kumar Rai", email: "myemail@gmail.com" } },
}) {
  const rows = [
    createData("Name", prof.data.name),
    createData("Email", prof.data.email),
    createData("Phone", " 7068179922"),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name || "Madhur Vatsal"}
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
