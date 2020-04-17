import React from "react";
import "react-json-pretty/themes/monikai.css";
import { makeStyles } from "@material-ui/core/styles";
import JSONPretty from "react-json-pretty";
import "./Test.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const input = {
  timestamp: "2020-04-15T22:51:23.500",
  producer: "starteosiobp",
  confirmed: 0,
  previous: "06e58c7196a61477e4eb5a0c7803e8b86d4d1b9312093380873ac08bc792fa36",
  transaction_mroot:
    "fae56c8ca961a1e7aab8f59a9d2b737feb2775504b7342810cd30ff27c121558",
  action_mroot:
    "4cf6c712205001941657ec9bc4d8cd53bacfe5de7d2cbf46262155e5fd1f3d15",
  schedule_version: 1694,
  new_producers: null,
  producer_signature:
    "SIG_K1_K9N1gLL9bd1w6CqLfgUZG1igbjWjbVgzww5qoDfKWcTLhzZcckCAYx9VZLXSGF6Aae5EYmC2BLV9f58tereggqLNmkyibm",
  transactions: [
    {
      status: "executed",
      cpu_usage_us: 632,
      net_usage_words: 52,
      trx: {
        id: "1e224c3e0aa12a48efa5017df2728ebacebdcfe7ca370366ff4e7a01c97df1f8",
        signatures: [
          "SIG_K1_JxHKHsaEPMcaXbpovWcs3RE2gEoRGkDFzJhMGhMujjF2oBBehU1rKmnKv2Q4uS5eqfTx1e3BCopqjpVqiDrxyGNiw6LaZA",
        ],
        compression: "none",
        packed_context_free_data: "",
        context_free_data: [],
        packed_trx:
          "0890975e228bc9626659000000000190b1beb92b154de330543237fbe5aeda010040341c84aba69300000000a8ed3232bc02c0a669a82b154de3044b4559000000003015a4594193319408555344540000000040341ce0a920cd1030550eb36934fbcae5df47c3c0d7032353975e173506790000000060571e49030000000a000a000000206ce5f07b6d80dd77c85706689fd0324da1a7161ee5f2cfcd4a2427cc272b667c6d486ef1f4c34e830384d567edff124710c4e4a82fae48f1a3f36f7738a43fa7000010c828854eb5af49a6efe99ef6fbd703e98f975e00127a000000000080635003000000000a000a0000001f2444bddb533fac6c46111e2ebbfbf8e15d9470f2f4a04e4a03fdc3ac6ed30d7f5be63cedeb7ef71a3d3d8f5bdf6c13e5dc7ddfab316c466e2f9e95a5289b77f40000c7ac73010000000000127a000000000080635003000000000100000000000000000000000000000000000000000000000000000000000000000000",
        transaction: {
          expiration: "2020-04-15T22:51:52",
          ref_block_num: 35618,
          ref_block_prefix: 1499882185,
          max_net_usage_words: 0,
          max_cpu_usage_ms: 0,
          delay_sec: 0,
          context_free_actions: [],
          actions: [
            {
              account: "whaleextrust",
              name: "verifytrade3",
              authorization: [
                {
                  actor: "miner1.wal",
                  permission: "active",
                },
              ],
              data: {
                exchange: "whaleexchang",
                base: {
                  value: 1497713412,
                  contract: "mkstaketoken",
                },
                quote: {
                  value: "361923564808",
                  contract: "tokens.wal",
                },
                buyer: "zguangsieos1",
                buyer_order_id: "276901847063586250",
                buyer_order_time: 1586975523,
                buyer_base_amount: 2030449943,
                buyer_quote_amount: "14111627104",
                buyer_maker_fee_ratio: 10,
                buyer_taker_fee_ratio: 10,
                buyer_memo: "",
                buyer_sig:
                  "SIG_K1_KizeEEx49K8ryj7XXjbhboa4kysPFod2DwrRZXChgoevgRX7w7Va2yWGEntd8tKAtNzNEP523booeJcVRwuV7apGcbfyuH",
                buyer_sig_type: 0,
                seller: "darveno55341",
                seller_order_id: "276966938753232806",
                seller_order_time: 1586991081,
                seller_base_amount: 8000000,
                seller_quote_amount: 55600000,
                seller_maker_fee_ratio: 10,
                seller_taker_fee_ratio: 10,
                seller_memo: "",
                seller_sig:
                  "SIG_K1_Jyzz1mYGqwt37bJzZMhKu9WbmSvN6QU6RQ2G5Pc6WJv3KjvFy4EwHoXh8XV2hCYf7K6FAqh66thN7xZkgezEUpqAfkyMvu",
                seller_sig_type: 0,
                trade_id: 24358087,
                base_amount: 8000000,
                quote_amount: 55600000,
                buyer_is_maker: 1,
                buyer_fee_amount: 0,
                seller_fee_amount: 0,
                buyer_wal_fee_amount: 0,
                seller_wal_fee_amount: 0,
                ignore_price: 0,
              },
              hex_data:
                "c0a669a82b154de3044b4559000000003015a4594193319408555344540000000040341ce0a920cd1030550eb36934fbcae5df47c3c0d7032353975e173506790000000060571e49030000000a000a000000206ce5f07b6d80dd77c85706689fd0324da1a7161ee5f2cfcd4a2427cc272b667c6d486ef1f4c34e830384d567edff124710c4e4a82fae48f1a3f36f7738a43fa7000010c828854eb5af49a6efe99ef6fbd703e98f975e00127a000000000080635003000000000a000a0000001f2444bddb533fac6c46111e2ebbfbf8e15d9470f2f4a04e4a03fdc3ac6ed30d7f5be63cedeb7ef71a3d3d8f5bdf6c13e5dc7ddfab316c466e2f9e95a5289b77f40000c7ac73010000000000127a0000000000806350030000000001000000000000000000000000000000000000000000000000000000000000000000",
            },
          ],
        },
      },
    },
    {
      status: "executed",
      cpu_usage_us: 512,
      net_usage_words: 180,
      trx: {
        id: "db45db22496b4a4d8bbc2676ec4e78308d72386459c9685c1597f72dfb87bbc0",
        signatures: [
          "SIG_K1_KW7Twt3BLDdnTs8wQYvURVuHHurkWQg9mMfRNADMQ9HDVMx8t6hyw1BR6riFDVubrm5rvwtKUPfDKWF4vgtJU1i835narL",
          "SIG_K1_KYswKgYjTZaD7Zh22b6fCK9zj9ucpjRdU7kb6YF4bk6oJpLtXKwvBqYM3j6eXHRFtrksmXE7zTU8aiv8j6yenEZUE17HPj",
          "SIG_K1_JvDt28s3izR7A3GihfvJSLQS2oeWMF7U5mUu5LP6vct9gttNFzmS5fUe5PjSjz3ouqDBorjkp3ntQwU3mRhqZBbiWbmGkB",
        ],
        compression: "none",
        packed_context_free_data: "",
        context_free_data: [],
        packed_trx:
          "7990975e618c0096a5b4000000000550e94dd719851cdd000000572d3ccdcd03a0268588c6a3d45d00000000a8ed323290aba4b706851cdd00000000a8ed323250e94dd719851cdd00000000a8ed3232cc0190aba4b706851cdda09866f84c95bc6af82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3835343920563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f333356377354462050e94dd719851cdd000000572d3ccdcd03a0268588c6a3d45d00000000a8ed323290aba4b706851cdd00000000a8ed323250e94dd719851cdd00000000a8ed3232cc0190aba4b706851cdd7053d155f2ca703ff82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3738373120563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f333356377354462050e94dd719851cdd000000572d3ccdcd03a0268588c6a3d45d00000000a8ed323290aba4b706851cdd00000000a8ed323250e94dd719851cdd00000000a8ed3232cb0190aba4b706851cdd9086e9bbb054cbc1f82a00000000000004564f4943450000a901436c61696d20796f7572203431382e37373320563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f333356377354462050e94dd719851cdd000000572d3ccdcd03a0268588c6a3d45d00000000a8ed323290aba4b706851cdd00000000a8ed323250e94dd719851cdd00000000a8ed3232cc0190aba4b706851cdda09863f84c97bd69f82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3731333320563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f333356377354462050e94dd719851cdd000000572d3ccdcd03a0268588c6a3d45d00000000a8ed323290aba4b706851cdd00000000a8ed323250e94dd719851cdd00000000a8ed3232cc0190aba4b706851cdda0986af94a938565f82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3731313520563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f333356377354462000",
        transaction: {
          expiration: "2020-04-15T22:53:45",
          ref_block_num: 35937,
          ref_block_prefix: 3030750720,
          max_net_usage_words: 0,
          max_cpu_usage_ms: 0,
          delay_sec: 0,
          context_free_actions: [],
          actions: [
            {
              account: "voiceairdrop",
              name: "transfer",
              authorization: [
                {
                  actor: "freeblockone",
                  permission: "active",
                },
                {
                  actor: "voice1prompt",
                  permission: "active",
                },
                {
                  actor: "voiceairdrop",
                  permission: "active",
                },
              ],
              data: {
                from: "voice1prompt",
                to: "heydenbsguge",
                quantity: "1.1000 VOICE",
                memo:
                  "Claim your 418.8549 V0ICE tokens now. - Visit https://bit.ly/33V7sTF ---Being Claimed Rate is nearly 66.3% now,Join us on #V0ICEBeta. Say hello to https://bit.ly/33V7sTF ",
              },
              hex_data:
                "90aba4b706851cdda09866f84c95bc6af82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3835343920563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f3333563773544620",
            },
            {
              account: "voiceairdrop",
              name: "transfer",
              authorization: [
                {
                  actor: "freeblockone",
                  permission: "active",
                },
                {
                  actor: "voice1prompt",
                  permission: "active",
                },
                {
                  actor: "voiceairdrop",
                  permission: "active",
                },
              ],
              data: {
                from: "voice1prompt",
                to: "bxsgpwmpu5dr",
                quantity: "1.1000 VOICE",
                memo:
                  "Claim your 418.7871 V0ICE tokens now. - Visit https://bit.ly/33V7sTF ---Being Claimed Rate is nearly 66.3% now,Join us on #V0ICEBeta. Say hello to https://bit.ly/33V7sTF ",
              },
              hex_data:
                "90aba4b706851cdd7053d155f2ca703ff82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3738373120563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f3333563773544620",
            },
            {
              account: "voiceairdrop",
              name: "transfer",
              authorization: [
                {
                  actor: "freeblockone",
                  permission: "active",
                },
                {
                  actor: "voice1prompt",
                  permission: "active",
                },
                {
                  actor: "voiceairdrop",
                  permission: "active",
                },
              ],
              data: {
                from: "voice1prompt",
                to: "sb5pdg5vxa3d",
                quantity: "1.1000 VOICE",
                memo:
                  "Claim your 418.773 V0ICE tokens now. - Visit https://bit.ly/33V7sTF ---Being Claimed Rate is nearly 66.3% now,Join us on #V0ICEBeta. Say hello to https://bit.ly/33V7sTF ",
              },
              hex_data:
                "90aba4b706851cdd9086e9bbb054cbc1f82a00000000000004564f4943450000a901436c61696d20796f7572203431382e37373320563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f3333563773544620",
            },
            {
              account: "voiceairdrop",
              name: "transfer",
              authorization: [
                {
                  actor: "freeblockone",
                  permission: "active",
                },
                {
                  actor: "voice1prompt",
                  permission: "active",
                },
                {
                  actor: "voiceairdrop",
                  permission: "active",
                },
              ],
              data: {
                from: "voice1prompt",
                to: "haytinbsgige",
                quantity: "1.1000 VOICE",
                memo:
                  "Claim your 418.7133 V0ICE tokens now. - Visit https://bit.ly/33V7sTF ---Being Claimed Rate is nearly 66.3% now,Join us on #V0ICEBeta. Say hello to https://bit.ly/33V7sTF ",
              },
              hex_data:
                "90aba4b706851cdda09863f84c97bd69f82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3731333320563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f3333563773544620",
            },
            {
              account: "voiceairdrop",
              name: "transfer",
              authorization: [
                {
                  actor: "freeblockone",
                  permission: "active",
                },
                {
                  actor: "voice1prompt",
                  permission: "active",
                },
                {
                  actor: "voiceairdrop",
                  permission: "active",
                },
              ],
              data: {
                from: "voice1prompt",
                to: "gq2tamrthege",
                quantity: "1.1000 VOICE",
                memo:
                  "Claim your 418.7115 V0ICE tokens now. - Visit https://bit.ly/33V7sTF ---Being Claimed Rate is nearly 66.3% now,Join us on #V0ICEBeta. Say hello to https://bit.ly/33V7sTF ",
              },
              hex_data:
                "90aba4b706851cdda0986af94a938565f82a00000000000004564f4943450000aa01436c61696d20796f7572203431382e3731313520563049434520746f6b656e73206e6f772e202d2056697369742068747470733a2f2f6269742e6c792f33335637735446202d2d2d4265696e6720436c61696d65642052617465206973206e6561726c792036362e3325206e6f772c4a6f696e207573206f6e20235630494345426574612e205361792068656c6c6f20746f2068747470733a2f2f6269742e6c792f3333563773544620",
            },
          ],
        },
      },
    },
    {
      status: "executed",
      cpu_usage_us: 308,
      net_usage_words: 21,
      trx: {
        id: "3ac14bd17b6f143c3c50e610c038e340c219ea6e90ed77ff9da2796660c2e448",
        signatures: [
          "SIG_K1_Jx17Y155vTbZ6qPmjoBXdZbdmTHfEtwwj5JNE8iMEayqvkSvXZKy8Hf4FuyAvrNGa1Ke8gPMmJb2QM9HJKEWFMUZM8Neoj",
        ],
        compression: "none",
        packed_context_free_data: "",
        context_free_data: [],
        packed_trx:
          "0890975e228bc962665900000000019091b97952a47075000000511d135332019091b97952a4707500000000a8ed32324b0a706f73745f6d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ed0641fe954a4b384041cff0a000000000000",
        transaction: {
          expiration: "2020-04-15T22:51:52",
          ref_block_num: 35618,
          ref_block_prefix: 1499882185,
          max_net_usage_words: 0,
          max_cpu_usage_ms: 0,
          delay_sec: 0,
          context_free_actions: [],
          actions: [
            {
              account: "ipsecontract",
              name: "addlabel",
              authorization: [
                {
                  actor: "ipsecontract",
                  permission: "active",
                },
              ],
              data: {
                label_: "post_miner",
                hash: "QmbX6pbWGz87TZfnp5aQ6yDz93foL5vKEEr3CcVwnea7Sn",
                address: "kmtucpbd3xmh",
                category: 4,
                size: 720668,
              },
              hex_data:
                "0a706f73745f6d696e65722e516d625836706257477a3837545a666e703561513679447a3933666f4c35764b45457233436356776e656137536ed0641fe954a4b384041cff0a0000000000",
            },
          ],
        },
      },
    },
  ],
  id: "06e58c726b2761bc12c6dac53bd0ca293c1c7ae877927974f66e894f96c0c9f6",
  block_num: 115706994,
  ref_block_prefix: 3319449106,
};

const Test = (props) => {
  var JSONPrettyMon = require("react-json-pretty/dist/monikai");
  return (
    // <div className={classes.style}>
    //     <div className={classes.headerStyle} onClick={ this.toggle }>
    //         <strong>Pretty Debug</strong>
    //     </div>

    //         <pre className={classes.preStyle}>
    //             {JSON.stringify(input, null, 2) }
    //         </pre>
    // </div>
    // <ReactJson src={input} theme="monokai" style={{wordBreak: "break-all"}}/>
    <div><pre className="details">{JSON.stringify(input, null, 2) }</pre></div>
    
  );
};

export default Test;
