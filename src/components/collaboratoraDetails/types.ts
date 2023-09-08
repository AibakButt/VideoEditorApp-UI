import { PopoverVirtualElement } from "@mui/material";
import React, { MouseEvent } from "react";

export interface ICollaboratorDetailsProps {
  anchorEl: PopoverVirtualElement | null;
  onClose: React.EventHandler<MouseEvent>;
  collaborator: Collaborator;
}

export type Collaborator = {
  avatar: string;
  name: string;
  email: string;
  role: string;
}