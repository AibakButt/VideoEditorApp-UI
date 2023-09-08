import { PopoverVirtualElement } from "@mui/material";
import React, { MouseEvent } from "react";
import { Project } from "../projectCard/types";

export interface ISearchPopoverProps {
  id: string | undefined;
  open: boolean;
  anchorEl: PopoverVirtualElement | null;
  onClose: React.EventHandler<MouseEvent>;
}
