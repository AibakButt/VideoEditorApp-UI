import { projects } from "@/utils/dummyData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box, Chip,
  Divider,
  Drawer,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import CollaboratorBar from '../collaboratorBar';
import InivteCollaborators from '../inviteCollaborators';
import ProjectCard from "../projectCard";
import ProjectDetails from "../projectDetails";

import styles from './styles';

const Videos: React.FC = () => {
  const [_, setSelectedValue] = useState("opt1");
  const [value, setValue] = useState("");
  const [cards, setCards] = useState(projects);
  const [open, setOpen] = React.useState(false);
  const [isProjectDetailsDrawerOpen, setIsProjectDetailsDrawerOpen] = React.useState(false);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  
  const handleClick = (index: number) => {
    const updatedCards = cards.map((card, i) => {
      if (i === index) {
        return { ...card, isSelected: true };
      } else {
        return { ...card, isSelected: false };
      }
    });

    setCards(updatedCards);
  };

  const getSelectedCard = () => {
    const selectedCards = cards.filter(card => card.isSelected);
    return selectedCards.length > 0 ? selectedCards[0] : null;
  }

  let selectedCard = getSelectedCard()
  return (
    <>
      <InivteCollaborators open={open} setOpen={setOpen} />
      <Box sx={styles.root}>
        <Box sx={styles.headerContainer}>
          <Box sx={styles.selectContainer}>
            <Typography variant="h5">Recent Videos</Typography>
            <Box sx={styles.subHeaderContainer}>
              <Typography sx={styles.subHeaderTypography}>
                Recently Created Videos
              </Typography>
              <Chip sx={styles.chipStyle} label="4 Sep, 2023" />
            </Box>
          </Box>
          <TextField
            placeholder="Search for project"
            type="text"
            size="small"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            sx={styles.textField}
            InputProps={{
              sx: styles.textFieldInputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <CollaboratorBar setOpen={setOpen} />
        <Divider sx={styles.divider} />
        <Grid container spacing={2} py={4}>
          {cards.map((card, index) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
              <ProjectCard 
                project={card} 
                isSelected={card.isSelected} 
                handleClick={() => {
                  handleClick(index);
                  setIsProjectDetailsDrawerOpen(true);
                }} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Drawer
        anchor="right"
        open={isProjectDetailsDrawerOpen}
        onClose={() => setIsProjectDetailsDrawerOpen(false)}
      >
        { selectedCard && <ProjectDetails card={selectedCard} closeDetails={setIsProjectDetailsDrawerOpen} /> }
      </Drawer>
    </>
  );
};

export default Videos;
