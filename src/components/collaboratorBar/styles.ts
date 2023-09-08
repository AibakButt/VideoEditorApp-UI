const styles = {
  root: {
    display: "flex",
    flexDirection: { xs: 'column', lg: 'row' },
    justifyContent: { lg: "space-between" },
    alignItems: { lg: 'center' },
    padding: "40px 40px 40px 10px",
  },
  chipBox: {
    display: "flex",
    width: "30%",
  },
  selectedChip: {
    background: "black",
    color: "white",
    fontSize: 13,
    "&:not(:first-of-type)": {
      marginLeft: "3px",
    },
  },
  unselectedChip: {
    background: "white",
    color: "black",
    fontSize: 13,
    "&:not(:first-of-type)": {
      marginLeft: "3px",
    },
  },
  collaboratorBox: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
  },
  collaboratorText: {
    fontSize: 12,
    marginRight: "15px",
  },
  avatarGroup: {
    marginLeft: "15px",
  },
  avatar: {
    fontSize: 12,
  },
  addText: {
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    color: "#7a67fe",
    marginLeft: "10px",
  },
  addIcon: {
    fontSize: 15,
    marginLeft: "15px",
  },
};

export default styles;
