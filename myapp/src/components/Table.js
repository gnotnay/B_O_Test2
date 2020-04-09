import React, { Component } from "react";
import axios from "axios";
import Panel from "./Panel";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class Table extends Component {
  constructor(props) {
    super();
    this.set = new Set();
    this.state = { numOfBlocks: 0, blocks: [] };
  }

  getBlock() {
    let url = "https://eos.greymass.com/v1/chain/get_info";
    axios.get(url).then((res) => {
      // console.log("begin size", this.state.blocks.length);
      if (!this.set.has(res.data.last_irreversible_block_id)) {
        // Find NEW block
        if (this.set.size < 10) {
          // Less than 10 blocks: add to set and state
          this.set.add(res.data.last_irreversible_block_id);
          this.setState({
            numOfBlocks: this.state.numOfBlocks + 1,
            blocks: [...this.state.blocks, res.data],
          });
        } else {
          // Equal to 10 blocks: remove least used one
          let tempBlocks = this.state.blocks;
          const leastUsedBlock = tempBlocks.shift(); // remove id from state
          this.set.delete(leastUsedBlock.last_irreversible_block_id); // remove id from set
          this.set.add(res.data.last_irreversible_block_id);
          this.setState({ blocks: [...tempBlocks, res.data] });
        }
      } else {
        let tempBlocks = this.state.blocks;
        const newTempBlocks = tempBlocks.filter(
          (block) =>
            block.last_irreversible_block_id !==
            res.data.last_irreversible_block_id
        );
        this.setState({ blocks: [...newTempBlocks, res.data] });
      }
      // console.log("end size", this.state.blocks.length);
    });
  }

  componentDidMount() {
    this.getBlock();
  }

  render() {
    this.panels = this.state.blocks.map((block, key) => (
      <Panel key={block.last_irreversible_block_id} block={block}></Panel>
    ));

    if (this.state.blocks.length !== 0) {
      // console.log("Hi", this.state.blocks);
      return (
        <div>
          <div>{this.panels}</div>
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={this.getBlock.bind(this)}
            >
              LOAD
            </Button>
          </div>
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

export default Table;
