import React from "react";
import { render } from "@testing-library/react";
import BlockPanel from "../components/BlockPanel";

test("renders BlockPanel", () => {
  // TestCase #1
  const { rerender, getByText, getAllByText } = render(
    <BlockPanel
      indexNum={"#9"}
      block={{
        timestamp: "2020-04-15T22:51:23.500",
        producer: "starteosiobp",
        confirmed: 0,
        previous:
          "06e58c7196a61477e4eb5a0c7803e8b86d4d1b9312093380873ac08bc792fa36",
        transaction_mroot:
          "fae56c8ca961a1e7aab8f59a9d2b737feb2775504b7342810cd30ff27c121558",
        action_mroot:
          "4cf6c712205001941657ec9bc4d8cd53bacfe5de7d2cbf46262155e5fd1f3d15",
        schedule_version: 1694,
        new_producers: null,
        producer_signature:
          "SIG_K1_K9N1gLL9bd1w6CqLfgUZG1igbjWjbVgzww5qoDfKWcTLhzZcckCAYx9VZLXSGF6Aae5EYmC2BLV9f58tereggqLNmkyibm",
        id: "069bd106994",
        block_num: 115706994,
        ref_block_prefix: 3319449106,
      }}
      numOfActions={200}
    />
  );
  const linkElementLabel1 = getByText(/Recent Block Index:/i);
  expect(linkElementLabel1).toBeInTheDocument();
  const linkElementLabel2 = getByText(/Block ID:/i);
  expect(linkElementLabel2).toBeInTheDocument();
  const linkElementLabel3 = getByText(/Timestamp:/i);
  expect(linkElementLabel3).toBeInTheDocument();
  const linkElementLabel4 = getByText(/Actions:/i);
  expect(linkElementLabel4).toBeInTheDocument();

  const linkElementData1 = getByText(/#9/i);
  expect(linkElementData1).toBeInTheDocument();
  const linkElementData2 = getAllByText(/069bd106994/i);
  expect(linkElementData2[0]).toBeInTheDocument();
  expect(linkElementData2[1]).toBeInTheDocument();
  const linkElementData3 = getAllByText(/2020-04-15T22:51:23.500/i);
  expect(linkElementData3[0]).toBeInTheDocument();
  expect(linkElementData3[1]).toBeInTheDocument();
  const linkElementData4 = getByText(/200/i);
  expect(linkElementData4).toBeInTheDocument();
  const linkElementData5 = getByText(
    /06e58c7196a61477e4eb5a0c7803e8b86d4d1b9312093380873ac08bc792fa36/i
  );
  expect(linkElementData5).toBeInTheDocument();
  const linkElementData6 = getByText(
    /SIG_K1_K9N1gLL9bd1w6CqLfgUZG1igbjWjbVgzww5qoDfKWcTLhzZcckCAYx9VZLXSGF6Aae5EYmC2BLV9f58tereggqLNmkyibm/i
  );
  expect(linkElementData6).toBeInTheDocument();

  // TestCase #2
  rerender(
    <BlockPanel
      indexNum={"#10"}
      block={{
        timestamp: "2020-04-17T06:15:29.500",
        producer: "big.one",
        confirmed: 0,
        previous:
          "06e8ff7f2128bb2f794c86bc635b72cbcf3a524fae6ce51a3a94069a1768459e",
        transaction_mroot:
          "a0186478a151637a7dea8ec66b718c0b31f9ee00e497570082b25b5631cd8a22",
        action_mroot:
          "879ae3d93d100bc45ba13035858cb87acbf551b0d31de681b223aeb3c7296a0e",
        schedule_version: 1694,
        new_producers: null,
        producer_signature:
          "SIG_K1_Jzv2kNQPcDuvzMThEUQ5fCJ5Qpn5xvbTZh3uE4kYUzzoksWMKbqQNq2xweSQNUvMFhCNGnb6VTo1Qef4u2FYbV15UYs28q",
        id: "06e8ff80bd2181ca63699afcfee0e9230e6435649a21811f92ec1568f1ddd029",
        block_num: 115933056,
        ref_block_prefix: 4237977955,
      }}
      numOfActions={299}
    />
  )

  const linkElementLabel11 = getByText(/Recent Block Index:/i);
  expect(linkElementLabel11).toBeInTheDocument();
  const linkElementLabel12 = getByText(/Block ID:/i);
  expect(linkElementLabel12).toBeInTheDocument();
  const linkElementLabel13 = getByText(/Timestamp:/i);
  expect(linkElementLabel13).toBeInTheDocument();
  const linkElementLabel14 = getByText(/Actions:/i);
  expect(linkElementLabel14).toBeInTheDocument();

  const linkElementData11 = getByText(/#10/i);
  expect(linkElementData11).toBeInTheDocument();
  const linkElementData12 = getAllByText(/06e8ff80bd2181ca63699afcfee0e9230e6435649a21811f92ec1568f1ddd029/i);
  expect(linkElementData12[0]).toBeInTheDocument();
  expect(linkElementData12[1]).toBeInTheDocument();
  const linkElementData13 = getAllByText(/2020-04-17T06:15:29.500/i);
  expect(linkElementData13[0]).toBeInTheDocument();
  expect(linkElementData13[1]).toBeInTheDocument();
  const linkElementData14 = getByText(/299/i);
  expect(linkElementData14).toBeInTheDocument();
  const linkElementData15 = getByText(
    /879ae3d93d100bc45ba13035858cb87acbf551b0d31de681b223aeb3c7296a0e/i
  );
  expect(linkElementData15).toBeInTheDocument();
  const linkElementData16 = getByText(
    /SIG_K1_Jzv2kNQPcDuvzMThEUQ5fCJ5Qpn5xvbTZh3uE4kYUzzoksWMKbqQNq2xweSQNUvMFhCNGnb6VTo1Qef4u2FYbV15UYs28q/i
  );
  expect(linkElementData16).toBeInTheDocument();

  // TestCase #3: error handling
  rerender(
    <BlockPanel
      indexNum={"#1"}
      block={"OOPS! Data is unavailable"}
      numOfActions={"OOPS! Data is unavailable"}
    />
  )

  const linkElementLabel21 = getByText(/Recent Block Index:/i);
  expect(linkElementLabel21).toBeInTheDocument();
  const linkElementLabel22 = getByText(/Block ID:/i);
  expect(linkElementLabel22).toBeInTheDocument();
  const linkElementLabel23 = getByText(/Timestamp:/i);
  expect(linkElementLabel23).toBeInTheDocument();
  const linkElementLabel24 = getByText(/Actions:/i);
  expect(linkElementLabel24).toBeInTheDocument();

  const linkElementData21 = getByText(/#1/i);
  expect(linkElementData21).toBeInTheDocument();
  const linkElementData22 = getAllByText(/OOPS! Data is unavailable/i);
  expect(linkElementData22[0]).toBeInTheDocument();
  expect(linkElementData22[1]).toBeInTheDocument();
});
