
import { drawerWidth, miniDrawerWidth } from '@/utils/constants';
import { COLORS } from '@/utils/colors';

const TopBarStyles = {
  appBar: (drawerOpen: boolean) => ({
    marginLeft: { md: `${miniDrawerWidth + (drawerOpen ? drawerWidth : 0)}px`},
    width: { md: `calc(100% - ${miniDrawerWidth + (drawerOpen ? drawerWidth : 0)}px)`},
    backgroundColor: "#fff",
    transition: 'margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
  }),

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  leftBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textField: {
    display: { xs: 'none', sm: 'flex' },
    marginLeft: '12px',
    minWidth: { lg: '22rem', sm: '15rem' },
    paddingLeft: '12px',
    backgroundColor: COLORS.backgroundColor,
    borderRadius: '36px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: COLORS.backgroundColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: COLORS.backgroundColor,
      },
    }
  },

  inputProps: {
    borderRadius: '36px',
    backgroundColor: COLORS.backgroundColor,
    fontSize: '0.8rem',
  },

  collaboratorBox: {
    display: { lg: 'flex', xs: 'none' },
    alignContent: 'center',
    justifyContent: 'center'
  },

  infoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    alignSelf: 'flex-end'
  },

  avatar: {
    marginLeft: '5px',
    width: '52px',
    height: '52px'
  }
};

export default TopBarStyles;
