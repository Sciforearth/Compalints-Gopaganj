import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3D1B9D",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: "200px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomTable({ rows }) {
  console.log("rows", rows);
  return (
    <TableContainer className="shadow">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Address</StyledTableCell>
            {/* <StyledDescriptionCell align="center">
              Description
            </StyledDescriptionCell> */}
            <StyledTableCell align="center">Attending</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Date Reported</StyledTableCell>
            <StyledTableCell align="center">Date Resolved</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                {row.address ? row.address : "NA"}
              </StyledTableCell>
              {/* <StyledDescriptionCell align="center">
                {row.description ? row.description : "NA"}
              </StyledDescriptionCell> */}
              <StyledTableCell align="center">
                {row.attending ? row.attending : "NA"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.staffContact ? row.staffContact : "NA"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.date ? row.date : "NA"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.resolvedDate ? row.resolvedDate : "NA"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.status ? row.status : "NA"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
