import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "../__mocks__/axios";
import PanelContainer from "./PanelContainer";

afterEach(cleanup);

test("loads and displays data", async () => {
  /**
   * Test axios GET
   */
  axiosMock.get.mockResolvedValue({
    data: {
      server_version: "d0860c4e",
      chain_id:
        "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
      head_block_num: 115937427,
      last_irreversible_block_num: 115937099,
      last_irreversible_block_id:
        "06e90f4b1748d73978b0259b2accbb9c828d8ad9eb4e74d5b8674d85bc0b537d",
      head_block_id:
        "06e91093aa86a0de75a077fbeb87a238f7410c7ee6a763b8c19fb04261b8d125",
      head_block_time: "2020-04-17T06:51:55.500",
      head_block_producer: "eosinfstones",
      virtual_block_cpu_limit: 200000,
      virtual_block_net_limit: 1048576000,
      block_cpu_limit: 200000,
      block_net_limit: 1048576,
      server_version_string: "v2.0.4",
      fork_db_head_block_num: 115937427,
      fork_db_head_block_id:
        "06e91093aa86a0de75a077fbeb87a238f7410c7ee6a763b8c19fb04261b8d125",
      server_full_version_string:
        "v2.0.4-d0860c4ecf59b1535ef39c6ac7cae606fdb6a3ff-dirty",
    },
  });

  /**
   * Test LinearProgress
   */
  const { getByTestId } = render(<PanelContainer />);
  expect(getByTestId("loading-LinearProgress")).toBeInTheDocument();

  const resolvedDiv = await waitForElement(() => getByTestId("resolved"));
  const resolvedButton = await waitForElement(() => getByTestId("button-load"));
  expect(resolvedDiv).toBeInTheDocument();
  expect(resolvedButton).toBeInTheDocument();
});
