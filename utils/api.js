import API from "@aws-amplify/api";
import Amplify from "@aws-amplify/core";
import awsConfig from "../src/aws-exports";

Amplify.configure(awsConfig);
const apiName = "pasirrisboysapi";
const path = "/records";

export const getTabulatedResults = async () => {
  const init = {
    headers: {},
  };
  const records = await API.get(apiName, path, init);
  console.log(records);
  const tabulatedResult = { vinson: 0, junhui: 0, chimin: 0 };
  records.forEach((record) => {
    tabulatedResult.vinson += record.vinson;
    tabulatedResult.junhui += record.junhui;
    tabulatedResult.chimin += record.chimin;
  });
  console.log(records);
  console.log(tabulatedResult);
  return tabulatedResult;
};

export const submitRecord = async (record) => {
  const init = {
    headers: {},
    body: record,
  };
  try {
    const response = await API.post(apiName, path, init);
    return true;
  } catch (err) {
    return false;
  }
};

// const oneTimeAdd = async () => {
//   const records = [
//     {
//       date: "9 Jan 2021",
//       vinson: 45,
//       chimin: -45,
//       junhui: 0,
//     },
//     {
//       date: "24 Jan 2021",
//       vinson: 275,
//       chimin: 50,
//       junhui: -325,
//     },
//     {
//       date: "12 Feb 2021",
//       vinson: 130,
//       chimin: 15,
//       junhui: -145,
//     },
//     {
//       date: "7 Mar 2021",
//       vinson: 115,
//       chimin: 135,
//       junhui: -250,
//     },
//     {
//       date: "17 Apr 2021",
//       vinson: 35,
//       chimin: -110,
//       junhui: 75,
//     },
//     {
//       date: "1 May 2021",
//       vinson: 145,
//       chimin: -135,
//       junhui: -10,
//     },
//     {
//       date: "15 May 2021",
//       vinson: 105,
//       chimin: -55,
//       junhui: -50,
//     },
//     {
//       date: "30 May 2021",
//       vinson: 200,
//       chimin: -350,
//       junhui: 150,
//     },
//     {
//       date: "12 Jun 2021",
//       vinson: 300,
//       chimin: -200,
//       junhui: -100,
//     },
//     {
//       date: "10 Jul 2021",
//       vinson: 0,
//       chimin: -190,
//       junhui: 190,
//     },
//     {
//       date: "14 Aug 2021",
//       vinson: 0,
//       chimin: -200,
//       junhui: 200,
//     },
//   ];

//   records.forEach((record) => {
//     const init = {
//       headers: {},
//       body: record,
//     };
//     const response = API.post(apiName, path, init);
//   });
// };
