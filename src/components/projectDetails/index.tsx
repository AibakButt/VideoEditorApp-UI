import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardMedia, Chip, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import AddCollaborator from "../collaboratorBar/addCollaborator";
import InivteCollaborators from "../inviteCollaborators";
import MailSelector from "../mailSelector";
import styles from "./styles";
import { IProjectDetailsProps } from "./types";

const ProjectDetails: React.FC<IProjectDetailsProps> = ({ card, closeDetails }) => {

  const [open, setOpen] = React.useState(false);

  return (
    <Card variant="outlined">
      <CardContent sx={styles.header}>
        <Typography sx={{ fontSize: "0.875rem" }}>Recent Video </Typography>
        <MoreVertIcon sx={{ fontSize: "0.875rem" }} />
      </CardContent>

      <Box px={2} sx={styles.profileIconContainer}>
        <span style={styles.profileIcon} onClick={() => closeDetails(false)}>
          <KeyboardArrowLeftRoundedIcon sx={styles.profileIconArrow} />
        </span>
        <Box sx={styles.profileDetails}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
            {card.label}
          </Typography>
          <Typography sx={{ color: "#777777", marginTop: "-5px" }}>
            Created at: {card.createdAt}
          </Typography>
        </Box>
      </Box>

      <Box px={2}>
        <CardMedia
          width="452px"
          height="334px"
          component="img"
          image={card.avatar}
          alt="green iguana"
          sx={styles.cardMedia}
        />

        <Box sx={styles.collaboratorContainer}>
          <AddCollaborator width={24} height={24} setOpen={setOpen} />
          <InivteCollaborators open={open} setOpen={setOpen} />
          <Box sx={styles.timelineContainer}>
            <Typography sx={{ fontSize: "0.875rem" }}>Timeline:</Typography>
            <Typography sx={styles.timeline}>
              Feb 2, 2023 - Feb 20, 2023
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.statusContainer}>
          <Typography sx={{ fontSize: "0.875rem" }}>Status:</Typography>
          <Chip
            label="In Progress"
            variant="outlined"
            sx={styles.statusChip}
          />
        </Box>
      </Box>

      <Divider orientation="horizontal" sx={styles.divider} />

      <CardContent>
        <Typography sx={styles.addCollaboratorTitle}>
          Add Collaborator
        </Typography>
        <Typography sx={styles.addCollaboratorSubtitle}>
          Assign These tasks to some other user.
        </Typography>
        <Box sx={styles.gmailSelector}>
          <MailSelector />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;
