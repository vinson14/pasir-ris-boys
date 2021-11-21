import { Grid } from "@mui/material";
import ModalContainer from "../stateless/misc/modal-container";
import Record from "./record";

const ViewRecordsModal = ({ open, onClose, records }) => {
  return (
    <ModalContainer open={open} onClose={onClose} title="Records">
      <Grid container>
        {records.map((record) => (
          <Record record={record} key={record.dateCreated} onClose={onClose} />
        ))}
      </Grid>
    </ModalContainer>
  );
};

export default ViewRecordsModal;
