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
