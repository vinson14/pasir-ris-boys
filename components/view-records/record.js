import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const Record = ({ record }) => {
  const date = new Date(record.dateCreated).toDateString();
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
                <Typography color={getColor(record[name])}>
                  {formatValue(record[name])}
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
