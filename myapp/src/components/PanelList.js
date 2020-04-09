import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class PanelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStamp: this.props.timeStamp,
      blockId: this.props.blockId,
      numOfActions: "Loading",
      isLoadingNumOfActions: false,
    };
    // console.log(this.state.blockId);
  }

  getTransactions(blockId) {
    const options = {
      headers: { "X-Custom-Header": "value" },
      data: {
        block_num_or_id: blockId,
      },
    };
    this.setState({ isLoadingNumOfActions: true });
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://eos.greymass.com/v1/chain/get_block",
        {},
        options
      )
      .then((response) => {
        let counter = 0;
        // console.log(response.data.transactions);

        for (let i = 0; i < response.data.transactions.length; i++) {
          if (
            response.data.transactions[i].hasOwnProperty("trx") &&
            response.data.transactions[i].trx.hasOwnProperty("transaction") &&
            response.data.transactions[i].trx.transaction.hasOwnProperty(
              "actions"
            )
          ) {
            // if (response.data.transactions[i].trx.transaction.hasOwnProperty("actions")) {
            counter +=
              response.data.transactions[i].trx.transaction.actions.length;
          }
        }
        this.setState({
          ...this.state,
          isLoadingNumOfActions: false,
          numOfActions: counter,
        });
        // console.log(counter);
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          isLoadingNumOfActions: false,
          numOfActions: "Timeout",
        });
      });
  }

  componentDidMount() {
    this.getTransactions(this.state.blockId);
  }

  render() {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="left">Timestamp:</TableCell>
            <TableCell align="left">{this.state.timeStamp}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Actions:</TableCell>
            <TableCell align="left">{this.state.numOfActions}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default PanelList;
