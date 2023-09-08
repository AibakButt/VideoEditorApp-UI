export type Project = {
  avatar: string;
  isSelected: boolean;
  label: string;
  createdAt: string;
}

export interface IProjectCardProps {
  isSelected: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  project: Project
}
