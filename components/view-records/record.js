import { Box, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteRecord } from "../../utils/api";
import { useContext, useState } from "react";
import mainContext from "../../context/main-context";
import { LoadingButton } from "@mui/lab";

const Record = ({ record, onClose }) => {
    const date = new Date(record.record_date).toDateString();
    const names = ["junhui", "chimin", "vinson"];
    const getColor = (value) => {
        if (value > 0) return "secondary";
        if (value < 0) return "error";
        return "text.primary";
    };
    const formatValue = (value) => {
        if (value >= 0) return `$${value}`;
        if (value < 0) return `-$${Math.abs(value)}`;
    };
    const [deleteLoading, setDeleteLoading] = useState(false);
    const { setLoading } = useContext(mainContext);
    const handleDelete = () => {
        setDeleteLoading(true);
        deleteRecord(record)
            .then((res) => {
                if (res) setDeleteLoading(false);
            })
            .then(() => onClose())
            .then(() => setLoading(true));
    };

    return (
        <Grid item xs={12} my={3}>
            <Card>
                <CardContent>
                    <Box p={3}>
                        <Typography variant="overline" component="div" align="center">
                            {date}
                        </Typography>
                        {names.map((name) => (
                            <Box key={name} display="flex" justifyContent="space-between" py={1}>
                                <Typography sx={{ fontWeight: 600 }}>
                                    {name.toUpperCase()}:
                                </Typography>
                                <Typography color={getColor(record[name])}>
                                    {formatValue(record[name])}
                                </Typography>
                            </Box>
                        ))}
                        <Box display="flex" p={2} justifyContent="center">
                            <LoadingButton
                                loading={deleteLoading}
                                loadingPosition="end"
                                color="error"
                                endIcon={<DeleteIcon />}
                                onClick={handleDelete}
                                variant="contained"
                            >
                                Delete
                            </LoadingButton>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Record;
