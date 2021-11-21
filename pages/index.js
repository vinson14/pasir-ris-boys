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
import AddButton from "../components/stateless/buttons/add-button";
import EditButton from "../components/stateless/buttons/edit-button";
import ButtonsContainer from "../components/stateless/layout/buttons-container";
import MainContainer from "../components/stateless/layout/main-container";
import ProfileCardGridItem from "../components/stateless/layout/profile-card-grid-item";
import ProfileCardsContainer from "../components/stateless/layout/profile-cards-container";
import MetaDataHead from "../components/stateless/misc/meta-data-head";
import ProfileCard from "../components/stateless/profile-cards/profile-card";
import ViewRecordsModal from "../components/view-records/view-records-modals";
import mainContext from "../context/main-context";
import { getTabulatedResults } from "../utils/api";
import { profiles } from "../utils/data";
import useModal from "../utils/useModal";

export default function Home() {
  const [results, setResults] = useState([]);
  const [tabulatedResults, setTabulatedResults] = useState();
  const [addRecordModalState, openAddRecordModal, closeAddRecordModal] =
    useModal();
  const [viewRecordsModalState, openViewRecordsModal, closeViewRecordsModal] =
    useModal();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) return;
    getTabulatedResults()
      .then(([results, tabulatedResults]) => {
        setTabulatedResults(tabulatedResults);
        setResults(results);
      })
      .then(() => setLoading(false));
    console.log("useEffect fetch results ran");
  }, [loading]);

  const context = { setLoading, loading };

  return (
    <mainContext.Provider value={context}>
      <MainContainer loading={loading} tabulatedResults={tabulatedResults}>
        <ProfileCardsContainer>
          {profiles.map((profile, index) => (
            <ProfileCardGridItem key={profile.name}>
              <ProfileCard
                index={index}
                {...profile}
                results={tabulatedResults}
              />
            </ProfileCardGridItem>
          ))}
          <ButtonsContainer>
            <AddButton onClick={openAddRecordModal}>Add Record</AddButton>
            <EditButton onClick={openViewRecordsModal}>View Records</EditButton>
          </ButtonsContainer>

          <AddRecordForm
            open={addRecordModalState}
            onClose={closeAddRecordModal}
          />
          <ViewRecordsModal
            open={viewRecordsModalState}
            onClose={closeViewRecordsModal}
            records={results}
          />
        </ProfileCardsContainer>
      </MainContainer>
    </mainContext.Provider>
  );
}
