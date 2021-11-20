import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import AddRecordForm from "../components/add-record/add-record-form";
import MetaDataHead from "../components/stateless/misc/meta-data-head";
import ProfileCard from "../components/stateless/profile-cards/profile-card";
import mainContext from "../context/main-context";
import { getTabulatedResults } from "../utils/api";
import useModal from "../utils/useModal";

export default function Home() {
  const [tabulatedResults, setTabulatedResults] = useState();
  const [modalState, openModal, closeModal] = useModal();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTabulatedResults()
      .then((results) => setTabulatedResults(results))
      .then(() => setLoading(false));
    console.log("useEffect fetch results ran");
  }, [loading]);

  const profiles = [
    { name: "Vinson", picture: "vinson.jpg", result: tabulatedResults?.vinson },
    {
      name: "Jun Hui",
      picture: "junhui.jpg",
      result: tabulatedResults?.junhui,
    },
    {
      name: "Chi Min",
      picture: "chimin.jpg",
      result: tabulatedResults?.chimin,
    },
  ];

  const context = { setLoading };

  return (
    <mainContext.Provider value={context}>
      <Box
        bgcolor="grey.100"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <MetaDataHead />
        {(loading || !tabulatedResults) && <CircularProgress />}
        {!loading && tabulatedResults && (
          <Container sx={{ p: 3 }}>
            <Grid container>
              {profiles.map((profile) => (
                <ProfileCard key={profile.name} {...profile} />
              ))}
            </Grid>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" onClick={openModal}>
                Add Record
              </Button>
            </Box>
            <AddRecordForm open={modalState} onClose={closeModal} />
          </Container>
        )}
      </Box>
    </mainContext.Provider>
  );
}
