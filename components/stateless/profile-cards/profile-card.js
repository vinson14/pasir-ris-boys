import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CustomTransition from "../misc/custom-transition";
import { useEffect, useState } from "react";

const ProfileCard = ({ name, picture, results, resultKey, index }) => {
  const result = results[resultKey];
  const avatarHeight = 125;
  const avatarSx = { height: avatarHeight, width: avatarHeight };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <CustomTransition show={show}>
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar alt={name} src={picture} sx={avatarSx} />
            <Box ml={3}>
              <Typography variant="h6" sx={{ fontWeight: 600 }} align="right">
                {name.toUpperCase()}
              </Typography>
              <Typography align="right">
                {result < 0 ? `-$${Math.abs(result)}` : `$${result}`}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </CustomTransition>
  );
};

export default ProfileCard;
