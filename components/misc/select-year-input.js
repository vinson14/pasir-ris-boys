import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import _ from "lodash";

const SelectYearInput = ({ selectedYear, selectYearOnChange }) => {
  return (
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select value={selectedYear} label="Year" onChange={selectYearOnChange}>
          {_.range(2021, new Date().getFullYear() + 1).map((year) => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectYearInput;
