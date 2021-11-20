import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const Record = ({ record }) => {
  const date = new Date(record.dateCreated).toDateString();
  const names = ["junhui", "chimin", "vinson"];
  return (
    <Grid item xs={12} my={3}>
      <Card>
        <CardContent>
          <Box p={3}>
            <Typography variant="overline" component="div" align="center">
              {date}
            </Typography>
            {names.map((name) => (
              <Box
                key={name}
                display="flex"
                justifyContent="space-between"
                py={1}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  {name.toUpperCase()}:
                </Typography>
                <Typography color={record[name] > 0 ? "secondary" : "error"}>
                  {record[name] > 0
                    ? `$${record[name]}`
                    : `-$${Math.abs(record[name])}`}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Record;
