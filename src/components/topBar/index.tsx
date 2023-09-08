import React, { useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import {
  AppBar, Avatar,
  AvatarGroup,
  Box, IconButton, InputAdornment, TextField, Toolbar,
  Typography
} from '@mui/material';
import { drawerWidth, miniDrawerWidth } from '@/utils/constants';
import { collaborators, user } from '@/utils/dummyData';
import TopBarStyles from './styles';
import SearchPopover from '../SearchPopover';
import CollaboratorDetails from '../collaboratoraDetails';
import { Collaborator } from '../collaboratoraDetails/types';

interface ITopNavProps {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const TopBar: React.FC<ITopNavProps> = ({ drawerOpen, setDrawerOpen }) => {
  const inputRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElC, setAnchorElC] = useState(null);
  const [selectedCollaborator, setSelectCollaborator] = useState<Collaborator>()

  const openSearchDropdown = Boolean(anchorEl);
  const id = openSearchDropdown ? "simple-popover" : undefined;

  const handleClick = () => {
    setAnchorEl(inputRef.current);
  };

  const onCloseSearchDropdown = () => {
    setAnchorEl(null);
  }

  const openPopover = (event: any) => {
    setAnchorElC(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorElC(null);
  };


  return (
    <AppBar position="fixed" elevation={0} sx={{ ...TopBarStyles.appBar(drawerOpen), marginLeft: { md: `${miniDrawerWidth + (drawerOpen ? drawerWidth : 0)}px` } }}>
      <Toolbar sx={TopBarStyles.toolbar}>
        <Box sx={TopBarStyles.leftBox}>
          <IconButton aria-label="open drawer" edge="start"
            sx={{ display: { md: 'none' } }}
            onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuIcon />
          </IconButton>

          <Avatar src={"/gradient.jpeg"} alt={"gradient"} sx={{ width: "30px", height: "30px" }} />
          <Typography sx={{ marginLeft: '12px' }}>
            <span style={{ color: '#111', }}>Hi,</span>
            <span style={{ color: '#777' }}> {user.name}</span>
          </Typography>
        </Box>

        <Box>
          <TextField
            ref={inputRef}
            variant="outlined"
            size="small"
            placeholder='Need any assistance'
            onClick={handleClick}
            sx={TopBarStyles.textField}
            InputProps={{
              ...TopBarStyles.inputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <MicIcon sx={{ color: '#007FFF' }} />
                </InputAdornment>
              ),
            }}
          />
          <SearchPopover open={openSearchDropdown} id={id} anchorEl={anchorEl} onClose={onCloseSearchDropdown} />
        </Box>

        <Box sx={TopBarStyles.collaboratorBox}>
          <Typography sx={{ marginLeft: '5rem', marginRight: '6px', marginTop: '8px', fontSize: '0.9rem' }}>
            <span style={{ color: '#111', }}>Collaborators </span>
            <span style={{ color: '#777' }}>({collaborators.length}):</span>
          </Typography>
          <AvatarGroup max={collaborators.length}>
            {collaborators.map(collaborator => (
              <Avatar key={collaborator.email} alt={collaborator.name} src={collaborator.avatar} sx={{ width: '34px', height: '34px' }} onClick={(e) => {
                openPopover(e);
                setSelectCollaborator(collaborator);
              }}/>
            ))}
          </AvatarGroup>
        </Box>

        {
          selectedCollaborator && (
            <CollaboratorDetails
              anchorEl={anchorElC}
              onClose={closePopover}
              collaborator={selectedCollaborator}
            />
          )
        }

        <Box sx={TopBarStyles.infoBox}>
          <Box>
            <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
              {user.name}
            </Typography>
            <Typography variant="caption" color="#ccc">
              {user.email}
            </Typography>
          </Box>
          <Avatar variant="square" alt="John Doe" src="/profile.png" sx={TopBarStyles.avatar} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
