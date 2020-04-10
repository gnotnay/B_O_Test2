import React, { Component } from "react";
import axios from "axios";
import Panel from "./Panel";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class PanelContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      blockSet: new Set(),
      numOfBlocks: 0,
      blocks: [],
      timestamps: [],
      numOfActions: [],
      buttonClicked: false,
    };
  }

  getBlock() {
    this.setState({
      ...this.state,
      buttonClicked: true,
    });
    let url_get_info = "https://eos.greymass.com/v1/chain/get_info";
    axios
      .get(url_get_info)
      .then((res) => {
        if (!this.state.blockSet.has(res.data.last_irreversible_block_id)) {
          if (this.state.blockSet.size < 2) {
            console.log("s1");
            let currBlockSet = this.state.blockSet;
            currBlockSet.add(res.data.last_irreversible_block_id);
            this.setState({
              ...this.state,
              blockSet: currBlockSet,
              numOfBlocks: this.state.numOfBlocks + 1,
              blocks: [...this.state.blocks, res.data],
            });
          } else {
            console.log("s2");
            let currBlocks = this.state.blocks;
            const leastUsedBlock = currBlocks.shift(); // remove id from state

            let currBlockSet = this.state.blockSet;
            currBlockSet.delete(leastUsedBlock.last_irreversible_block_id); // remove id from set
            currBlockSet.add(res.data.last_irreversible_block_id); // add id to set

            let currTimestamps = this.state.timestamps;
            let currNumOfActions = this.state.numOfActions;
            currTimestamps.shift();
            currNumOfActions.shift();
            this.setState({
              ...this.state,
              blockSet: currBlockSet,
              timestamps: [...currTimestamps],
              numOfActions: [...currNumOfActions],
              blocks: [...currBlocks, res.data],
            });
          }
        } else {
          console.log("s3");
          let currBlocks = this.state.blocks;
          let indexOfBlock = 0;
          currBlocks.forEach((block, index) => {
            if (
              block.last_irreversible_block_id ===
              res.data.last_irreversible_block_id
            ) {
              indexOfBlock = index;
            }
          });
          let currTimestamps = this.state.timestamps;
          let currNumOfActions = this.state.numOfActions;
          currTimestamps.splice(indexOfBlock, 1);
          currNumOfActions.splice(indexOfBlock, 1);

          const newBlocks = currBlocks.filter(
            (block) =>
              block.last_irreversible_block_id !==
              res.data.last_irreversible_block_id
          );
          this.setState({
            ...this.state,
            timestamps: [...currTimestamps],
            numOfActions: [...currNumOfActions],
            blocks: [...newBlocks, res.data],
          });
        }
        const options = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: res.data.last_irreversible_block_id,
          },
        };

        let url_get_block =
          "https://cors-anywhere.herokuapp.com/https://eos.greymass.com/v1/chain/get_block";
        return axios.post(url_get_block, {}, options);
      })
      .then((response) => {
        let counter = 0;

        for (let i = 0; i < response.data.transactions.length; i++) {
          if (
            response.data.transactions[i].hasOwnProperty("trx") &&
            response.data.transactions[i].trx.hasOwnProperty("transaction") &&
            response.data.transactions[i].trx.transaction.hasOwnProperty(
              "actions"
            )
          ) {
            counter +=
              response.data.transactions[i].trx.transaction.actions.length;
          }
        }
        // console.log(response.data.timestamp);
        this.setState({
          ...this.state,
          timestamps: [...this.state.timestamps, response.data.timestamp],
          numOfActions: [...this.state.numOfActions, counter],
          buttonClicked: false,
        });

        console.log("numOfActions:", this.state.numOfActions);
        console.log("timestamps:", this.state.timestamps);
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          timestamps: [...this.state.timestamps, "No data"],
          numOfActions: [...this.state.numOfActions, "No data"],
          buttonClicked: false,
        });
      });
  }

  componentDidMount() {
    this.getBlock();
  }

  render() {
    this.panels = this.state.blocks.map((block, index) => (
      <Panel key={index} block={block} timestamp={this.state.timestamps[index]} numOfActions={this.state.numOfActions[index]}></Panel>
    ));

    if (this.state.blocks.length !== 0) {
      // console.log("Hi", this.state.blocks);
      return (
        <div>
          <div>{this.panels}</div>
            <Button
              variant="contained"
              size="large"
              onClick={this.getBlock.bind(this)}
              disabled={this.state.buttonClicked?true:false}
            >
              LOAD
            </Button>
        </div>
      );
    }

    if (this.state.blocks.length === 0) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
  }
}

export default PanelContainer;
