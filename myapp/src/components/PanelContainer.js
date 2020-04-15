import React, { Component } from "react";
import axios from "axios";
import BlockPanel from "./BlockPanel";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class PanelContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      capacity: 3,
      blocksMap: new Map(),
      actionsMap: new Map(),
      buttonClicked: false,
    };
  }

  getBlock() {
    this.setState({
      ...this.state,
      buttonClicked: true,
    });

    const url_get_info = "https://eos.greymass.com/v1/chain/get_info";
    let currBlockId = null;
    let currBlocksMap = this.state.blocksMap;
    let currActionsMap = this.state.actionsMap;
    let blocksMapKeys = currBlocksMap.keys();
    let actionsMapKeys = currActionsMap.keys();

    axios
      .get(url_get_info)
      .then((res) => {
        currBlockId = res.data.last_irreversible_block_id;

        if (currBlocksMap.has(currBlockId)) {
          currBlocksMap.delete(currBlockId);
          currActionsMap.delete(currBlockId);
        }
        currBlocksMap.set(currBlockId, {});
        currActionsMap.set(currBlockId, null);

        blocksMapKeys = currBlocksMap.keys();
        actionsMapKeys = currActionsMap.keys();

        while (currBlocksMap.size > this.state.capacity) {
          currBlocksMap.delete(blocksMapKeys.next().value);
          currActionsMap.delete(actionsMapKeys.next().value);
        }

        const options = {
          headers: { "X-Custom-Header": "value" },
          data: {
            block_num_or_id: currBlockId,
          },
        };

        const url_get_block =
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

        currBlocksMap.set(currBlockId, response.data);
        currActionsMap.set(currBlockId, counter);

        this.setState({
          ...this.state,
          blocksMap: currBlocksMap,
          actionsMap: currActionsMap,
          buttonClicked: false,
        });
      })
      .catch((err) => {
        currBlocksMap.set(currBlockId, "Not available");
        currActionsMap.set(currBlockId, "Not available");

        this.setState({
          ...this.state,
          blocksMap: currBlocksMap,
          actionsMap: currActionsMap,
          buttonClicked: false,
        });
      });
  }

  componentDidMount() {
    this.getBlock();
  }

  render() {
    let blocks = [...this.state.blocksMap.values()];
    let actions = [...this.state.actionsMap.values()];

    this.panels = blocks.map((block, index) => (
      <BlockPanel
        key={index}
        block={block}
        numOfActions={actions[index]}
      ></BlockPanel>
    ));

    if (this.state.blocksMap.size !== 0 && this.state.actionsMap.length !== 0) {
      return (
        <div>
          <div>{this.panels}</div>
          {this.state.buttonClicked ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              size="large"
              onClick={this.getBlock.bind(this)}
              disabled={this.state.buttonClicked ? true : false}
            >
              LOAD
            </Button>
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
