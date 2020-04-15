import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class DetailList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("make sure:", this.props.blockDetails);
    if (this.props.blockDetails) {
      this.tables = Object.keys(this.props.blockDetails).map((key) => {
        if (
          typeof this.props.blockDetails[key] === "string" ||
          typeof this.props.blockDetails[key] === "number"
        ) {
          return (
            <TableRow>
              <TableCell align="left">{key}</TableCell>
              <TableCell align="left">{this.props.blockDetails[key]}</TableCell>
            </TableRow>
          );
        }

        return <TableRow></TableRow>;
      });
    }

    return (
      <div>
        <Table>
          <TableBody>{this.tables}</TableBody>
        </Table>
      </div>
    );
  }
}

export default DetailList;
