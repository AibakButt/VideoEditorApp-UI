const projectDetailsStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileIconContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 2,
  },
  profileIcon: {
    width: "3.8rem",
    height: "3.8rem",
    background: "black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  profileIconArrow: {
    fontSize: "1.5rem",
    color: "white",
  },
  profileDetails: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 2,
  },
  cardMedia: {
    borderRadius: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  collaboratorContainer: {
    display: "flex",
    flexDirection: 'column',
    fontSize: 10,
    paddingBottom: 1,
  },
  timelineContainer: {
    display: 'flex',
  },
  timeline: {
    fontWeight: 400,
    fontSize: "0.875rem",
    marginLeft: "10px",
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: 10,
    paddingBottom: 2,
  },
  statusChip: {
    background: "#725eff",
    color: "white",
    fontSize: 12,
    marginLeft: "10px",
    height: "29px",
    width: "100px",
  },
  divider: {
    color: "black",
    width: "100%",
  },
  addCollaboratorTitle: {
    fontSize: "1.125rem",
    fontWeight: 500,
  },
  addCollaboratorSubtitle: {
    fontSize: "0.875rem",
  },
  gmailSelector: {
    paddingTop: 3,
    paddingBottom: 20,
  }
};

export default projectDetailsStyles;
