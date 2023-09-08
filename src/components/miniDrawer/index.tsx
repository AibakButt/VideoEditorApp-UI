import React from "react";
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {
  Avatar, Box, Drawer, List,
  ListItem, ListItemIcon,
} from '@mui/material';
import { IMiniDrawerProps } from "./types";
import { user } from "@/utils/dummyData";

import styles from './styles';  

const MiniDrawer: React.FC<IMiniDrawerProps> = ({ drawerOpen, setDrawerOpen }) => {

  const menuItems = [
    { icon: HomeIcon, label: "Home" },
    { icon: TextSnippetIcon, label: "Text Snippet" },
    { icon: PeopleAltIcon, label: "People" },
    { icon: AssignmentLateIcon, label: "Tasks" },
    { icon: NotificationsIcon, label: "Notifications" },
    { icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <Drawer variant="permanent" anchor="left" sx={styles.drawer}>
      <Box sx={styles.avatarBox}>
        <Avatar src={"/drawer-button.png"} onClick={() => setDrawerOpen(!drawerOpen)} sx={styles.avatarButton} />
      </Box>

      <Box sx={styles.workspaceBox}>
        {user.workspaces.map(workspace => (
          <Avatar key={workspace.name} variant="square" src={workspace.avatar} sx={styles.workspaceAvatar} />
        ))}

        <Avatar
          src="/addbutton.png"
          alt="Some description"
          sx={styles.addWorkspaceButton}
          onClick={() => console.log("Add new workspace")}
        />
      </Box>

      <Box sx={styles.listBox}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} sx={styles.listItem}>
              <ListItemIcon sx={styles.listItemIcon}>
                <item.icon htmlColor="#333" fontSize="medium" />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={styles.footerBox}>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
        </ListItem>
      </Box>
    </Drawer>
  )
}

export default MiniDrawer;
