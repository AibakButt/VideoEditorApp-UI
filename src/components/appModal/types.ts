import { ReactNode } from "react";
export interface IAppModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: ReactNode;
}
