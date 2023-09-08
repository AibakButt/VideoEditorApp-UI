import { COLORS } from '@/utils/colors';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MicIcon from '@mui/icons-material/Mic';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar, Box, Divider, Drawer, IconButton, List,
  ListItem,
  ListItemIcon,
  ListItemText, Typography, useMediaQuery, useTheme
} from '@mui/material';
import React, { useEffect, useRef } from 'react';
import ClosableDrawerStyles from './styles';
import { ICloseableDrawerProps } from './types';

const ClosableDrawer: React.FC<ICloseableDrawerProps> = ({
  drawerOpen,
  setDrawerOpen
}) => {
  const drawerRef = useRef(null);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (isMediumScreen) {
      setDrawerOpen(false);
    }
  
    function handleClickOutside(event: React.MouseEvent | MouseEvent) {
      if (drawerRef.current && !(drawerRef.current as any).contains(event.target) && isMediumScreen) {
        setDrawerOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef, isMediumScreen, setDrawerOpen]);

  const sections = [
    {
      items: [
        { icon: AssessmentOutlinedIcon, label: "Recent Videos" },
        { icon: GridViewOutlinedIcon, label: "Projects" },
        { icon: NearMeOutlinedIcon, label: "Collaborators" }
      ]
    },
    {
      header: "General",
      items: [
        { icon: PaymentOutlinedIcon, label: "Payment" },
        { icon: ForumOutlinedIcon, label: "Messages" },
        { icon: FeedOutlinedIcon, label: "News" }
      ]
    },
    {
      items: [
        { icon: NotificationsActiveOutlinedIcon, label: "Notification" },
        { icon: DarkModeOutlinedIcon, label: "Theme" }
      ]
    }
  ];


  useEffect(() => {
    function handleClickOutside(event: React.MouseEvent | MouseEvent) {
      if (drawerRef.current && !(drawerRef.current as any).contains(event.target) && isMediumScreen) {
        setDrawerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef, isMediumScreen, setDrawerOpen]);


  return (
    <Drawer
      ref={drawerRef}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      PaperProps={{
        sx: {
          backgroundColor: COLORS.backgroundColor
        }
      }}
      ModalProps={{
        BackdropProps: {
          onClick: () => {
            if (isMediumScreen) {
              setDrawerOpen(false);
            }
          },
        },
      }}
      sx={ClosableDrawerStyles.drawer}
    >
      <Box p={2} sx={ClosableDrawerStyles.headerBox}>
        <Avatar
          variant="square"
          src="/color-dashboard.png"
          sx={ClosableDrawerStyles.avatar}
          alt={"dashboard"}
        />
        <Box>
          <IconButton color="primary" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton color="primary" aria-label="mic">
            <MicIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="caption" sx={ClosableDrawerStyles.caption}>Overview</Typography>
      {sections.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {section.header && (
            <>
              <Typography variant="caption" sx={{ backgroundColor: COLORS.backgroundColor, padding: '18px' }}>
                {section.header}
              </Typography>
            </>
          )}

          <List>
            {section.items.map((item, itemIndex) => (
              <ListItem button key={itemIndex}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          {sectionIndex !== sections.length - 1 && <Divider sx={ClosableDrawerStyles.divider} />}
        </React.Fragment>
      ))}

    </Drawer>
  )
}

export default ClosableDrawer;