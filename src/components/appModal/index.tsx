import { Box, Modal } from "@mui/material";
import * as React from "react";
import { style } from "./styles";
import { IAppModalProps } from "./types";

const AppModal: React.FC<IAppModalProps> = ({ open, setOpen, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
export default AppModal;
