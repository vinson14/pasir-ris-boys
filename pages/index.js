import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import AddRecordForm from "../components/stateless/add-record/add-record-form";
import MetaDataHead from "../components/stateless/misc/meta-data-head";
import ProfileCard from "../components/stateless/profile-cards/profile-card";
import MainContext from "../context/main-context";
import { getTabulatedResults } from "../utils/api";
import useModal from "../utils/useModal";

export default function Home() {
  const [tabulatedResults, setTabulatedResults] = useState({});
  const [modalState, openModal, closeModal] = useModal();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTabulatedResults().then((results) => setTabulatedResults(results));
    setLoading(false);
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
    <MainContext.Provider value={context}>
      <div>
        <MetaDataHead />
        <Container>
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
      </div>
    </MainContext.Provider>
  );
}
