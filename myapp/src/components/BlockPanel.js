import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TurnedInTwoToneIcon from "@material-ui/icons/TurnedInTwoTone";
import DetailList from "./DetailList";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    flexBasis: "20%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
  },
}));

export default function BlockPanel(props) {
  const classes = useStyles();
  // console.log("props.block", props.block);
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <TurnedInTwoToneIcon />
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.heading} align="left">
                <b>Block ID:</b>{" "}
                {props.block.id ? props.block.id : "Loading......"}
              </Typography>
              <Typography className={classes.heading} align="left">
                <b>Timestamp:</b>{" "}
                {props.block.timestamp
                  ? props.block.timestamp
                  : "Loading......"}
              </Typography>
              <Typography className={classes.heading} align="left">
                <b>Actions:</b>{" "}
                {props.numOfActions ? props.block.timestamp : "Loading......"}
              </Typography>
            </CardContent>
          </Card>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DetailList blockDetails={props.block}></DetailList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
