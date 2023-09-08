import { SxProps, Theme } from "@mui/system";

const InviteCollaboratorsStyles: {
  container: SxProps<Theme>;
  title: SxProps<Theme>;
  subTitle: SxProps<Theme>;
  inputContainer: SxProps<Theme>;
  textField: SxProps<Theme>;
  caption: SxProps<Theme>;
  addButton: SxProps<Theme>;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 22,
    fontWeight: 500,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#222",
    mt: "-.5rem",
  },
  inputContainer: {
    mt: "1.5rem",
  },
  textField: {
    border: "1px solid #F9F9F9",
    backgroundColor: "rgba(249, 249, 249, 0.63)",
    borderRadius: "1rem",
    width: "318px",
    height: "50px",
    mt: ".5rem",
  },
  caption: {
    variant: "caption",
    mt: "20px",
  },
  addButton: {
    backgroundColor: "#5136FF",
    mt: "2rem",
    maxWidth: "29px",
    alignSelf: "flex-end",
    "&:hover": {
      backgroundColor: "#5136FF",
    },
  },
};

export default InviteCollaboratorsStyles;
