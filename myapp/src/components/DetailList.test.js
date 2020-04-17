import React from "react";
import { render } from "@testing-library/react";
import DetailList from "./DetailList";

test("renders DetailList", () => {
  // TestCase #1
  const { rerender, getByText, getAllByText } = render(
    <DetailList
      blockDetails={{
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
    />
  );
  const linkElementData1 = getByText(/2020-04-15T22:51:23.500/i);
  expect(linkElementData1).toBeInTheDocument();
  const linkElementData2 = getByText(/starteosiobp/i);
  expect(linkElementData2).toBeInTheDocument();
  const linkElementData3 = getByText(
    /06e58c7196a61477e4eb5a0c7803e8b86d4d1b9312093380873ac08bc792fa36/i
  );
  expect(linkElementData3).toBeInTheDocument();
  const linkElementData4 = getByText(
    /fae56c8ca961a1e7aab8f59a9d2b737feb2775504b7342810cd30ff27c121558/i
  );
  expect(linkElementData4).toBeInTheDocument();
  const linkElementData5 = getByText(/115706994/i);
  expect(linkElementData5).toBeInTheDocument();
  const linkElementData6 = getByText(/3319449106/i);
  expect(linkElementData6).toBeInTheDocument();

  // TestCase #2
  rerender(
    <DetailList
      blockDetails={{
        timestamp: "2020-04-17T06:49:11.500",
        producer: "bitfinexeos1",
        confirmed: 0,
        previous:
          "06e90f4aea85fd3c9d3bba1db9fb041ab31bea6dfec39c739858e28da0173c06",
        transaction_mroot:
          "3afb835bc0a890ca8fb23fc4b792722ce04e064aafec6b0878fd310c2e4b441b",
        action_mroot:
          "7f11037c4212b01e4d7b06699aec4c4c77c224a9bc32c43dfb86c8488de6b28e",
        schedule_version: 1694,
        new_producers: null,
        producer_signature:
          "SIG_K1_K8qyWeUPbuHDdMGpNbgRXDVgRZ8goSHWV2P3rG1uu6Qvq4fRL65ATHW2Gupn8ByB3XyJ9iC8mi4agQ2J4frqyq2Z5nrfvH",
        transactions: [
          {
            status: "executed",
            cpu_usage_us: 10698,
            net_usage_words: 12,
            trx: {
              id:
                "3c678e71eb811c1ace49dd45031f04944d9c592fd3e3824bb82060956636dbcf",
              signatures: [
                "SIG_K1_KhGYiDdKvLSdoQvMqmYAKzmV1xhD8tjdPSZuj6zT3kdUL5FhiSY6EitHXUNsxcQfqBWZgJLKYiMQMqohtTqz7NPRcTrJPM",
              ],
              compression: "none",
              packed_context_free_data: "",
              context_free_data: [],
              packed_trx:
                "8451995efb0d0d5f281900000000012038a5425794a7ba000000000000a6be012038a5425794a7ba00000000a8ed32320000",
              transaction: {
                expiration: "2020-04-17T06:49:40",
                ref_block_num: 3579,
                ref_block_prefix: 422076173,
                max_net_usage_words: 0,
                max_cpu_usage_ms: 0,
                delay_sec: 0,
                context_free_actions: [],
                actions: [
                  {
                    account: "rentcpu2oow2",
                    name: "run",
                    authorization: [
                      {
                        actor: "rentcpu2oow2",
                        permission: "active",
                      },
                    ],
                    data: "",
                  },
                ],
              },
            },
          },
        ],
        id: "06e90f4b1748d73978b0259b2accbb9c828d8ad9eb4e74d5b8674d85bc0b537d",
        packed_trx: "f657995ea50d3d813ef100000000018025bd35aba3743c0080a4f4aa6c52d502804d5739aba3743c00000000a8ed32328025bd35aba3743c00000000a8ed3232ca030100000000000000c59c18004551995e01009803654a786c556b6c75777a414d2f4174374e5170524332585a722f48574a7569576f49637551663565697054734a6a6167475a4563696d504c467869677777596d775a4752304b59554735683548397149686a4334426737515851417834385070342b58342f67776475423768326743617537516b3757335339316a556e4764795371723650437a48563359433574466d546443695634704b704a5355326b7a4d623574506a4b4a6c5251506e367463626674536a4b3175655357554c6e524572527078595351594a765741554a4d456b79484d4e6a7a3378484c516439735172387049673845706c2b564c492b7a594c734d49713936566641675654546e476c4b363264745a4b7a7131524c64672b7071464b64567764546264314f7676486b376f4e7454747235776670753973614c32783076454e613264623735377a63556531356a6b4473426b42764a784a38654d5352484b664a4e663347537147304e306553475956724d5141754e4f4d7a54302b536e3063374f67647864377631522b69354838502f432f2f7476546c372f41436b4571656b3d1d313538373130363131373d3e7b626c6f636b3a3131353933373130317d00",
        block_num: 115937099,
        ref_block_prefix: 2602938488,
      }}
    />
  );
  const linkElementData11 = getByText(/2020-04-17T06:49:11.500/i);
  expect(linkElementData11).toBeInTheDocument();
  const linkElementData12 = getByText(/bitfinexeos1/i);
  expect(linkElementData12).toBeInTheDocument();
  const linkElementData13 = getByText(
    /SIG_K1_K8qyWeUPbuHDdMGpNbgRXDVgRZ8goSHWV2P3rG1uu6Qvq4fRL65ATHW2Gupn8ByB3XyJ9iC8mi4agQ2J4frqyq2Z5nrfvH/i
  );
  expect(linkElementData13).toBeInTheDocument();
  const linkElementData14 = getByText(
    /3afb835bc0a890ca8fb23fc4b792722ce04e064aafec6b0878fd310c2e4b441b/i
  );
  expect(linkElementData14).toBeInTheDocument();
  const linkElementData15 = getByText(/3c678e71eb811c1ace49dd45031f04944d9c592fd3e3824bb82060956636dbcf/i);
  expect(linkElementData15).toBeInTheDocument();
  const linkElementData16 = getByText(/2602938488/i);
  expect(linkElementData16).toBeInTheDocument();
});
