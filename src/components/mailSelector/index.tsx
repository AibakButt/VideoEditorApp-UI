import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  TextField,
  Paper
} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { collaborators } from "@/utils/dummyData";
import styles from './styles';
import { Collaborator } from "../collaboratoraDetails/types";

const MailSelector: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<Collaborator>();

  return (
    <Box>
      <Typography sx={styles.titleSize}>Select Users</Typography>

      <Autocomplete
        freeSolo
        options={collaborators}
        renderOption={(props, option) => (
          <Grid container alignItems="center" sx={styles.gridPadding}>
            <Avatar
              alt={option.name}
              src={option.avatar}
              sx={styles.autoCompleteAvatar}
            />
            <Box>
              <Typography sx={styles.optionTypography}>{option.name}</Typography>
              <Typography sx={styles.optionTypography} variant="body2" color="textSecondary">{option.email}</Typography>
            </Box>
          </Grid>
        )}
        PaperComponent={({ children }) => (
          <Paper sx={styles.paperBackground}>
            {children}
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search users"
            sx={styles.textFieldStyles}
          />
        )}
        onChange={(event, newValue) => {}}
      />
    </Box>
  );
}

export default MailSelector;
