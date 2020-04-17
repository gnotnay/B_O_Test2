import React, { Component } from "react";
import axios from "axios";
import BlockPanel from "./BlockPanel";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

class PanelContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      capacity: 10,
      blocks: [],
      actions: [],
      buttonClicked: false,
    };
  }

  getBlock() {
    this.setState({
      ...this.state,
      blocks: [],
      actions: [],
      buttonClicked: true,
    });

    const url_get_info = "https://eos.greymass.com/v1/chain/get_info";
    let currBlockNum = null;
    axios
      .get(url_get_info)
      .then((res) => {
        currBlockNum = res.data.last_irreversible_block_num;

        const optionsOne = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum,
          },
        };

        const optionsTwo = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 1,
          },
        };

        const optionsThree = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 2,
          },
        };

        const optionsFour = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 3,
          },
        };

        const optionsFive = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 4,
          },
        };

        const optionsSix = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 5,
          },
        };

        const optionsSeven = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 6,
          },
        };

        const optionsEight = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 7,
          },
        };

        const optionsNine = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 8,
          },
        };

        const optionsTen = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockNum - 9,
          },
        };

        const url_get_block =
          "https://cors-anywhere.herokuapp.com/https://eos.greymass.com/v1/chain/get_block";
        // "https://eos.greymass.com/v1/chain/get_block";

        const requestOne = axios.post(url_get_block, {}, optionsOne);
        const requestTwo = axios.post(url_get_block, {}, optionsTwo);
        const requestThree = axios.post(url_get_block, {}, optionsThree);
        const requestFour = axios.post(url_get_block, {}, optionsFour);
        const requestFive = axios.post(url_get_block, {}, optionsFive);
        const requestSix = axios.post(url_get_block, {}, optionsSix);
        const requestSeven = axios.post(url_get_block, {}, optionsSeven);
        const requestEight = axios.post(url_get_block, {}, optionsEight);
        const requestNine = axios.post(url_get_block, {}, optionsNine);
        const requestTen = axios.post(url_get_block, {}, optionsTen);

        // return axios.post(url_get_block, {}, options);
        return axios.all([
          requestOne,
          requestTwo,
          requestThree,
          requestFour,
          requestFive,
          requestSix,
          requestSeven,
          requestEight,
          requestNine,
          requestTen,
        ]);
      })
      .then((responses) => {
        responses.forEach((response) => {
          let actionsCounter = 0;

          for (let i = 0; i < response.data.transactions.length; i++) {
            if (
              response.data.transactions[i].hasOwnProperty("trx") &&
              response.data.transactions[i].trx.hasOwnProperty("transaction") &&
              response.data.transactions[i].trx.transaction.hasOwnProperty(
                "actions"
              )
            ) {
              actionsCounter +=
                response.data.transactions[i].trx.transaction.actions.length;
            }
          }

          this.setState({
            ...this.state,
            blocks: [...this.state.blocks, response.data],
            actions: [...this.state.actions, actionsCounter],
            buttonClicked: false,
          });
        });
      })
      .catch((err) => {
        
        this.setState({
          ...this.state,
          blocks: [...this.state.blocks, "OOPS! Data is unavailable"],
          actions: [...this.state.actions, "OOPS! Data is unavailable"],
          buttonClicked: false,
        });
      });
  }

  componentDidMount() {
    this.getBlock();
  }

  render() {
    // console.log("blocks", this.state.blocks);

    this.panels = this.state.blocks.map((block, index) => (
      <BlockPanel
        key={index}
        indexNum={index + 1}
        block={block}
        numOfActions={this.state.actions[index]}
      ></BlockPanel>
    ));

    if (this.state.blocks.size !== 0) {
      return (
        <div>
          <div>{this.panels}</div>
          {this.state.buttonClicked ? (
            <LinearProgress variant="query" data-testid="LinearProgress-display"/>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={this.getBlock.bind(this)}
                disabled={this.state.buttonClicked ? true : false}
              >
                LOAD
              </Button>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
  }
}

export default PanelContainer;
