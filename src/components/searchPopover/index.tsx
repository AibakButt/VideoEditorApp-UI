import { Avatar, Box, Chip, Divider, InputAdornment, List, ListItem, Popover, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import VideoCameraFrontTwoToneIcon from '@mui/icons-material/VideoCameraFrontTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import MobiledataOffTwoToneIcon from '@mui/icons-material/MobiledataOffTwoTone';
import { collaborators } from "@/utils/dummyData";
import styles from "./styles";
import { ISearchPopoverProps } from "./types";

const SearchPopover: React.FC<ISearchPopoverProps> = (
  { id, open, anchorEl, onClose }) => {
  return (
    <Popover
      id={id}
      open={open}
      elevation={0}
      sx={styles.popoverContainer}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <div style={{ padding: "15px" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for people, task, doc"
          sx={styles.textFieldOutlined}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Chip label="Ctrl + F" size="small" />
              </InputAdornment>
            )
          }}
        />
        <Divider style={{ margin: "10px 0" }} />
        <Typography variant="caption" sx={styles.captionInlineMargin}>{`I'm looking for`}</Typography>
        <Box >
          <Chip
            label="Clickable Deletable"
            onClick={() => console.log("clicked")}
            onDelete={() => console.log("clicked")}
            avatar={<PeopleAltTwoToneIcon />}
            sx={styles.chipSizePadding}
            size={"small"}
          />
          <Chip
            label="Clickable Deletable"
            onClick={() => console.log("clicked")}
            onDelete={() => console.log("clicked")}
            avatar={<VideoCameraFrontTwoToneIcon />}
            size={"small"}
            sx={styles.chipSizePadding}
          />
        </Box>
        <Typography variant="caption" sx={styles.captionInlineMargin}>Last searches (3)</Typography>
        <List>
          {collaborators.slice(0, 3).map(collaborator => (
            <ListItem key={collaborator.name} sx={styles.listItemMargin}>
              <Avatar sx={styles.avatarSize} src={collaborator.avatar} />
              <Typography variant="caption" sx={styles.captionBoldMargin}>{collaborator.name}</Typography>
              <Typography variant="caption">{collaborator.email}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="caption" sx={styles.captionInlineMargin}>Quick Actions</Typography>
        <List>
          <ListItem sx={styles.flexBetween}>
            <Box sx={styles.flexCenter}>
              <AddIcon sx={styles.iconBackgroundSizePadding} />
              <Typography variant="caption" sx={styles.captionSizeMarginBottom}>Create New</Typography>
            </Box>
            <Typography variant="caption" sx={styles.badgeBackgroundSizePadding}>M</Typography>
          </ListItem>
          <ListItem sx={styles.flexBetween}>
            <Box sx={styles.flexCenter}>
              <AddIcon sx={styles.iconBackgroundSizePadding} />
              <Typography variant="caption" sx={styles.captionSizeMarginBottom}>Add Collaborator</Typography>
            </Box>
            <Typography variant="caption" sx={styles.badgeBackgroundSizePadding}>M</Typography>
          </ListItem>
          <ListItem sx={styles.flexBetween}>
            <Box sx={styles.flexCenter}>
              <MobiledataOffTwoToneIcon sx={styles.iconBackgroundSizePadding} />
              <Typography variant="caption" sx={styles.captionSizeMarginBottom}>Move File</Typography>
            </Box>
            <Typography variant="caption" sx={styles.badgeBackgroundSizePadding}>M</Typography>
          </ListItem>
        </List>
      </div>
    </Popover>
  );
}

export default SearchPopover;
