import { COLORS } from '@/utils/colors';

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.backgroundColor,
    borderRadius: "20px",
    padding: '2rem',
  },
  headerContainer: {
    display: "flex",
    flexDirection: { xs: 'column', md: "row" },
    justifyContent: "space-between",
    alignItems: { md: "center" },
  },
  selectContainer: {
    flexDirection: "column",
  },
  subHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subHeaderTypography: {
    fontSize: '13px',
    marginLeft: '2px',
    opacity: 0.6,
  },
  chipStyle: {
    background: "#25ae3a",
    color: "white",
    fontSize: '13px',
    marginLeft: '6px',
  },
  textField: {
    display: { xs: 'none', md: 'flex' },
    minWidth: { md: '22rem' },
    marginRight: '6px',
    "& fieldset": { border: "none" },
  },
  textFieldInputProps: {
    borderRadius: "36px",
    backgroundColor: "#ffffff",
    fontSize: '0.9rem',
  },
  divider: {
    orientation: "horizontal",
    variant: "inset",
    color: "black",
  }
};

export default styles;
