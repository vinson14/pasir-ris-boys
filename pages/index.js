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
import ViewRecordsModal from "../components/view-records/view-records-modals";
import mainContext from "../context/main-context";
import { getTabulatedResults } from "../utils/api";
import useModal from "../utils/useModal";

export default function Home() {
  const [results, setResults] = useState([]);
  const [tabulatedResults, setTabulatedResults] = useState();
  const [addRecordModalState, openAddRecordModal, closeAddRecordModal] =
    useModal();
  const [viewRecordsModalState, openViewRecordsModal, closeViewRecordsModal] =
    useModal();
  const [loading, setLoading] = useState(true);
  const buttonSx = { width: 150 };
  useEffect(() => {
    getTabulatedResults()
      .then(([results, tabulatedResults]) => {
        setTabulatedResults(tabulatedResults);
        setResults(results);
      })
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
        display="flex"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <MetaDataHead />
        {(loading || !tabulatedResults) && <CircularProgress />}
        {!loading && tabulatedResults && (
          <Container sx={{ p: 3, height: "100%" }}>
            <Grid container>
              {profiles.map((profile) => (
                <ProfileCard key={profile.name} {...profile} />
              ))}
            </Grid>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                onClick={openAddRecordModal}
                sx={buttonSx}
              >
                Add Record
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={3}>
              <Button
                variant="contained"
                color="secondary"
                sx={buttonSx}
                onClick={openViewRecordsModal}
              >
                View Records
              </Button>
            </Box>
            <AddRecordForm
              open={addRecordModalState}
              onClose={closeAddRecordModal}
            />
            <ViewRecordsModal
              open={viewRecordsModalState}
              onClose={closeViewRecordsModal}
              records={results}
            />
          </Container>
        )}
      </Box>
    </mainContext.Provider>
  );
}
