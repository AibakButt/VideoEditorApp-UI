import React from 'react';
import { Avatar, Box, Typography, Popover, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { ICollaboratorDetailsProps } from './types';

const CollaboratorDetails: React.FC<ICollaboratorDetailsProps> =({ 
   anchorEl, onClose, collaborator }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'collaborator-details-popover' : undefined;

    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          borderRadius: "16px"
        }}
        elevation={0}
      >
        <Box
          px={2}
          py={1}
          bgcolor="white"
          
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '290px',
            borderRadius:"16px"
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar src={collaborator.avatar} alt={collaborator.name} sx={{ width: '45px', height: '45px' }} />
            <Box ml={2}>
              <Typography variant="subtitle1" fontSize={"1.125rem"}>{collaborator.name}</Typography>
              <Typography variant="body2" fontSize={"0.875rem"} color="textSecondary">
                {collaborator.role}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={onClose}>
            <MessageIcon color="action" />
          </IconButton>
        </Box>
      </Popover>
    );
  };

export default CollaboratorDetails;
