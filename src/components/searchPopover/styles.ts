import { COLORS } from "@/utils/colors";

const searchPopoverStyles = {
  popoverContainer: {
    borderRadius: "16px",
    minWidth: '22rem',
  },
  textFieldOutlined: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
    borderRadius: "36px",
    fontSize: '0.8rem',
  },
  listItemMargin: {
    marginTop: -2,
  },
  avatarSize: {
    width: '27px',
    height: '27px',
  },
  captionBoldMargin: {
    fontWeight: 'bold',
    margin: '6px',
  },
  chipSizePadding: {
    fontSize: '0.8rem',
    padding: '5px',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconBackgroundSizePadding: {
    backgroundColor: '#ccc',
    width: "19px",
    height: '19px',
    borderRadius: '4px',
    padding: '2px',
  },
  captionSizeMarginBottom: {
    fontSize: '0.8rem',
    marginLeft: '8px',
    paddingBottom: '8px',
    display: 'inline-block',
  },
  badgeBackgroundSizePadding: {
    width:"20px",
    height:"20px",
    backgroundColor: COLORS.backgroundColor,
    color: '#ccc',
    paddingLeft:'5px',
  },
  captionInlineMargin: {
    margin: '10px',
    display: 'inline-block',
    color: '#aaa',
  }
};

export default searchPopoverStyles;
