import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Button, InputAdornment, TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import AppModal from "../appModal";
import InviteCollaboratorsStyles from './styles';
import { IInivteCollaboratorsProps } from "./types";

const InivteCollaborators: React.FC<IInivteCollaboratorsProps> = ({
  open,
  setOpen
}) => {
  return (
    <AppModal open={open} setOpen={setOpen}>
      <Box sx={InviteCollaboratorsStyles.container}>
        <Typography sx={InviteCollaboratorsStyles.title}>Invite Collaboration</Typography>
        <Typography sx={InviteCollaboratorsStyles.subTitle}>
          Lorem ipsum dolor sit amet consectetur.
        </Typography>

        <Typography sx={InviteCollaboratorsStyles.inputContainer}>
          Name or Email
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="e.g John, john@gmail.com"
          sx={InviteCollaboratorsStyles.textField}
          InputProps={{
            sx: {
              borderRadius: "1rem",
              backgroundColor: "rgba(249, 249, 249, 0.63)",
              height: "50px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#22222" }} />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="caption" sx={InviteCollaboratorsStyles.caption}>
          This site is protected by reCAPTCHA and the Google Privacy Policy
          and Terms of Service apply.
        </Typography>

        <Button variant="contained" sx={InviteCollaboratorsStyles.addButton}>
          Add
        </Button>
      </Box>

    </AppModal>
  )
}

export default InivteCollaborators;