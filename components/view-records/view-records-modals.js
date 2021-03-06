import { Accordion, AccordionDetails, AccordionSummary, Grid } from "@mui/material";
import ModalContainer from "../stateless/misc/modal-container";
import Record from "./record";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import _ from "lodash";

const ViewRecordsModal = ({ open, onClose, records }) => {
    const years = _.range(2021, new Date().getFullYear() + 1);
    return (
        <ModalContainer open={open} onClose={onClose} title="Records">
            <Grid container minWidth={300}>
                {years.map((year) => (
                    <Grid item xs={12} key={year}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                {year}
                            </AccordionSummary>
                            <AccordionDetails>
                                {records
                                    .filter((record) => {
                                        return new Date(record.record_date).getFullYear() === year;
                                    })
                                    .map((record) => (
                                        <Record
                                            record={record}
                                            key={record.record_date}
                                            onClose={onClose}
                                        />
                                    ))}
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                ))}
            </Grid>
        </ModalContainer>
    );
};

export default ViewRecordsModal;
