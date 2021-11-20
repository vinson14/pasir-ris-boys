import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import MetaDataHead from "../components/stateless/misc/meta-data-head";
import ProfileCard from "../components/stateless/profile-cards/profile-card";
import { getTabulatedResults } from "../utils/api";
import useModal from "../utils/useModal";

export default function Home() {
  const [tabulatedResults, setTabulatedResults] = useState({});
  const [modalState, setModalState] = useState(false);
  useEffect(() => {
    getTabulatedResults().then((results) => setTabulatedResults(results));
  }, []);

  const [modalState, openModal, closeModal] = useModal();

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

  return (
    <div>
      <MetaDataHead />
      <Container>
        <Grid container>
          {profiles.map((profile) => (
            <ProfileCard {...profile} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
