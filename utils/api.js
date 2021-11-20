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
  const response = await API.get(apiName, path, init);
  console.log(response);

  return {
    vinson: 1000,
    junhui: -500,
    chimin: -500,
  };
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
