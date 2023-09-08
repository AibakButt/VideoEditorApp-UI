import { miniDrawerWidth } from '@/utils/constants';
import { SxProps, Theme } from '@mui/system';

const styles: {
  drawer: SxProps<Theme>;
  avatarBox: SxProps<Theme>;
  avatarButton: SxProps<Theme>;
  workspaceAvatar: SxProps<Theme>;
  addWorkspaceButton: SxProps<Theme>;
  workspaceBox: SxProps<Theme>;
  listBox: SxProps<Theme>;
  listItem: SxProps<Theme>;
  listItemIcon: SxProps<Theme>;
  footerBox: SxProps<Theme>;
} = {
  drawer: {
    width: `${miniDrawerWidth}px`,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: `${miniDrawerWidth}px`,
      boxSizing: 'border-box',
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  avatarButton: {
    width: '14px',
    height: '14px',
  },
  avatarBox: {
    width: '24px',
    height: '22px',
    backgroundColor: '#e1e1e1',
    marginLeft: '82px',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    paddingLeft: '2px'
  },
  workspaceBox: {
    flex: '0 0 20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  workspaceAvatar: {
    width: 44,
    height: 44,
    marginBottom: 1
  },
  addWorkspaceButton: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    boxShadow: '2px 2px 10px rgba(128, 0, 128, 0.6)'
  },
  listBox: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-80px'
  },
  listItem: {
    justifyContent: 'center'
  },
  listItemIcon: {
    justifyContent: 'center'
  },
  footerBox: {
    flex: '0 0 auto',
    padding: 2
  }
};

export default styles;
