import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
import { getRecords, getTabulatedResults } from "../utils/api";
import { profiles } from "../utils/data";
import useModal from "../utils/useModal";
import _ from "lodash";

export default function Home() {
  const [records, setRecords] = useState([]);
  const [tabulatedResults, setTabulatedResults] = useState();
  const [addRecordModalState, openAddRecordModal, closeAddRecordModal] =
    useModal();
  const [viewRecordsModalState, openViewRecordsModal, closeViewRecordsModal] =
    useModal();
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  useEffect(() => {
    if (loading) {
      getRecords().then((res) => {
        console.log(res);
        setRecords(res);
        setTabulatedResults(getTabulatedResults(res, selectedYear));
        setLoading(false);
      });
    } else {
      setTabulatedResults(getTabulatedResults(records, selectedYear));
    }

    console.log("useEffect fetch results ran");
  }, [records, loading, selectedYear]);

  const selectYearOnChange = (event) => {
    setSelectedYear(event.target.value);
  };

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
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                value={selectedYear}
                label="Year"
                onChange={selectYearOnChange}
              >
                {_.range(2021, new Date().getFullYear() + 1).map((year) => (
                  <MenuItem value={year} key={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

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
            records={records}
          />
        </ProfileCardsContainer>
      </MainContainer>
    </mainContext.Provider>
  );
}
