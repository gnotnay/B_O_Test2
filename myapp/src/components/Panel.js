import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import PanelList from "./PanelList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Panel(props) {
  // const [block, setBlock] = useState(null);
  const classes = useStyles();
  // console.log("Panel", props.block);
  // countActions(props.block.last_irreversible_block_id);
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LabelImportantTwoToneIcon></LabelImportantTwoToneIcon>
          <Typography className={classes.heading}>
            <b>Block ID:</b> {props.block.last_irreversible_block_id}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography> */}
          <PanelList
            timeStamp={props.block.head_block_time.toString()}
            blockId={props.block.last_irreversible_block_id}
          ></PanelList>
          {/* </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
