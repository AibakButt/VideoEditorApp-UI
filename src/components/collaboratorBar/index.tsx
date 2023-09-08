import { Chips } from "@/utils/dummyData";
import { Box, Chip } from "@mui/material";
import AddCollaborator from "./addCollaborator";
import styles from "./styles";
import { ICollaboratorBarProps } from "./types";

const CollaboratorBar: React.FC<ICollaboratorBarProps> = ({ setOpen }) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.chipBox}>
        {Chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip.text}
            variant="outlined"
            sx={chip.isSelected ? styles.selectedChip : styles.unselectedChip}
          />
        ))}
      </Box>
      <AddCollaborator setOpen={setOpen} />
    </Box>
  );
}

export default CollaboratorBar;
