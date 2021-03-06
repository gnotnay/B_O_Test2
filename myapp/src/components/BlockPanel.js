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
    wordBreak: "break-all"
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    flexBasis: "20%",
    flexShrink: 0,
    wordBreak: "break-all"
  },
  details: {
    wordBreak: "break-all"
  },
}));

export default function BlockPanel(props) {
  const classes = useStyles();
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
                <b>Recent Block Index:</b> {props.indexNum}
              </Typography>
              <Typography className={classes.heading} align="left">
                <b>Block ID:</b>{" "}
                {props.block.id
                  ? props.block.id
                  : "OOPS! Data currently not available"}
              </Typography>
              <Typography className={classes.heading} align="left">
                <b>Timestamp:</b>{" "}
                {props.block.timestamp
                  ? props.block.timestamp
                  : "OOPS! Data currently not available"}
              </Typography>
              <Typography className={classes.heading} align="left">
                <b>Actions:</b>{" "}
                {props.numOfActions
                  ? props.numOfActions
                  : "OOPS! Data currently not available"}
              </Typography>
            </CardContent>
          </Card>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <DetailList blockDetails={props.block}></DetailList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}