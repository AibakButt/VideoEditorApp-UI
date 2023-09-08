import React from "react";
import { Project } from "../projectCard/types";

export interface IProjectDetailsProps {
  card: Project;
  closeDetails: React.Dispatch<React.SetStateAction<boolean>>
}
