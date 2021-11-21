import ModalContainer from "../stateless/misc/modal-container";
import {
  Box,
  LoadingButton,
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useRecord from "../../utils/useRecord";
import { useContext, useState } from "react";
import mainContext from "../../context/main-context";

const AddRecordForm = ({ open, onClose }) => {
  const names = ["vinson", "junhui", "chimin"];
  const labels = { vinson: "Vinson", junhui: "Jun Hui", chimin: "Chi Min" };
  const [error, setError] = useState(false);
  const { setLoading, loading } = useContext(mainContext);
  const [record, onChange, handleSubmit] = useRecord(setLoading);
  const [formSubmittedLoading, setFormSubmittedLoading] = useState(false);
  const onSubmit = async (event) => {
    setFormSubmittedLoading(true);
    const submitStatus = await handleSubmit(event);
    setFormSubmittedLoading(false);
    if (submitStatus) onClose();
    else setError(true);
  };

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
                  placeholder="1000"
                  onChange={(event) => onChange(event, name)}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
          {error && (
            <Grid item xs={12} pb={3}>
              <Typography
                component="div"
                variant="caption"
                color="error"
                align="center"
              >
                Values do not add up to zero
              </Typography>
            </Grid>
          )}
            <Grid item xs={12} display="flex" justifyContent="center">
              <Loading Button loading={formSubmittedLoading} variant="contained" type="submit">
                Add
              </Button>
            </Grid>
        </Grid>
      </form>
    </ModalContainer>
  );
};

export default AddRecordForm;
