import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class DetailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockDetails: this.props.blockDetails,
    };
  }

  // getTransactions(blockId) {
  //   const options = {
  //     headers: { "X-Custom-Header": "value" },
  //     data: {
  //       block_num_or_id: blockId,
  //     },
  //   };
  //   this.setState({ isLoadingNumOfActions: true });
  //   axios
  //     .post(
  //       "https://cors-anywhere.herokuapp.com/https://eos.greymass.com/v1/chain/get_block",
  //       {},
  //       options
  //     )
  //     .then((response) => {
  //       let counter = 0;

  //       for (let i = 0; i < response.data.transactions.length; i++) {
  //         if (
  //           response.data.transactions[i].hasOwnProperty("trx") &&
  //           response.data.transactions[i].trx.hasOwnProperty("transaction") &&
  //           response.data.transactions[i].trx.transaction.hasOwnProperty("actions")
  //         ) {
  //           counter += response.data.transactions[i].trx.transaction.actions.length;
  //         }
  //       }
  //       this.setState({
  //         ...this.state,
  //         timeStamp: response.data.timestamp,
  //         isLoadingNumOfActions: false,
  //         numOfActions: counter,
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         ...this.state,
  //         timeStamp: "No data",
  //         isLoadingNumOfActions: false,
  //         numOfActions: "No data",
  //       });
  //     });
  // }

  render() {
    this.tables = Object.keys(this.state.blockDetails).map((key) => (
      <TableRow>
        <TableCell align="left">{key}</TableCell>
        <TableCell align="left">{this.state.blockDetails[key]}</TableCell>
      </TableRow>
    ));

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
