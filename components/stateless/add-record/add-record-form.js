import ModalContainer from "./modal-container";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useRecord from "../../../utils/useRecord";

const AddRecordForm = ({ open, onClose }) => {
  const names = ["vin", "jun", "chim"];
  const labels = { vin: "Vinson", jun: "Jun Hui", chim: "Chi Min" };
  const [record, onChange, onSubmit] = useRecord();

  return (
    <ModalContainer open={open} onClose={onClose} title="Add Record">
      <form onSubmit={onSubmit}>
        <Grid container>
          {names.map((name) => (
            <Grid
              item
              xs={12}
              md={4}
              p={3}
              key={name}
              display="flex"
              justifyContent="center"
            >
              <TextField
                label={labels[name]}
                value={record[name]}
                type="number"
                onChange={(event) => onChange(event, name)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          ))}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </ModalContainer>
  );
};

export default AddRecordForm;
