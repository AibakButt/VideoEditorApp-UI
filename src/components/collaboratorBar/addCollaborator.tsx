import { collaborators } from "@/utils/dummyData";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CollaboratorDetails from "../collaboratoraDetails";
import { Collaborator } from "../collaboratoraDetails/types";
import styles from "./styles";
import { IAddCollaboratorProps } from "./types";

const AddCollaborator: React.FC<IAddCollaboratorProps> = ({ setOpen, width, height, fontSize }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCollaborator, setSelectCollaborator] = useState<Collaborator>()

  const openPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={styles.collaboratorBox}>
        <Typography sx={{ ...styles.collaboratorText, fontSize }}>
          Collaborators:
        </Typography>
        <AvatarGroup sx={styles.avatarGroup}>
          {collaborators.slice(0, 2).map((collaborator) => (
            <Avatar
              onClick={(e) => {
                openPopover(e);
                setSelectCollaborator(collaborator);
              }}
              key={collaborator.email}
              alt={collaborator.name}
              src={collaborator.avatar}
              sx={{ ...styles.avatar, width, height }}
            />
          ))}
        </AvatarGroup>
        <Typography sx={styles.addText} onClick={() => setOpen((prev) => !prev)}>
          <AddIcon sx={styles.addIcon} /> Add new
        </Typography>
      </Box>
      {
        selectedCollaborator && (
          <CollaboratorDetails
            anchorEl={anchorEl}
            onClose={closePopover}
            collaborator={selectedCollaborator}
          />
        )
      }
    </React.Fragment>
  )
}

export default AddCollaborator;