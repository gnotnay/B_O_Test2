import React from "react";
import JSONPretty from "react-json-pretty";

const DetailList = (props) => {
  const JSONPrettyMon = require("react-json-pretty/dist/monikai");
  return (
    <JSONPretty
      data={props.blockDetails}
      theme={JSONPrettyMon}
    ></JSONPretty>
  );
};

export default DetailList;