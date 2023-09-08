import { drawerWidth, miniDrawerWidth } from '@/utils/constants';
import { SxProps, Theme } from '@mui/system';

const ClosableDrawerStyles: {
  drawer: SxProps<Theme>;
  headerBox: SxProps<Theme>;
  avatar: SxProps<Theme>;
  caption: SxProps<Theme>;
  divider: SxProps<Theme>;
} = {
  drawer: {
    width: `${drawerWidth}px`,
    flexShrink: 0,
    marginLeft: `${miniDrawerWidth}px`,
    '& .MuiDrawer-paper': {
      marginLeft: { md: `${miniDrawerWidth}px` },
      width: `${drawerWidth}px`,
      boxSizing: 'border-box',
    },
  },
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '4px',
    minHeight: '84px',
  },
  avatar: {
    width: "24px",
    height: "24px",
  },
  caption: {
    backgroundColor: 'backgroundColor',
    padding: "12px 18px"
  },
  divider: {
    margin: '18px',
  },
};

export default ClosableDrawerStyles;
