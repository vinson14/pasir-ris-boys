import { useState } from "react";
import { submitRecord } from "./api";

const useRecord = (setLoading) => {
  const [vin, setVin] = useState("");
  const [jun, setJun] = useState("");
  const [chim, setChim] = useState("");
  const record = { vin, jun, chim };
  const onChangeMap = {
    vin: setVin,
    jun: setJun,
    chim: setChim,
  };

  const resetValues = () => {
    setVin("");
    setJun("");
    setChim("");
  };

  const onChange = (event, name) => {
    const result =
      event.target.value === "" ? "" : parseInt(event.target.value);
    onChangeMap[name](result);
  };

  const parseValues = () => {
    const keys = Object.keys(record);
    keys.forEach((key) => {
      if (record[key] === "") record[key] = 0;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    parseValues();
    if (!validateRecord()) {
      console.log("Values do not tabulate");
      return false;
    }
    const response = await submitRecord(record);
    if (response) {
      resetValues();
      setLoading(true);
      return true;
    } else {
      return false;
    }
  };

  const validateRecord = () => {
    return Object.values(record).reduce((a, b) => a + b, 0) === 0;
  };

  return [record, onChange, handleSubmit];
};

export default useRecord;
