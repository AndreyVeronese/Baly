import { ReactNode } from "react";
import {
  DialogInputClose,
  DialogContainer,
  DialogLabelClose,
  DialogContent,
  DialogCloseButton,
} from "./dialog.styles";

interface PropsType {
  children: ReactNode;
  title: string;
  showDialog: boolean;
  setShowDialog: Function;
  id: string;
  size?: string;
}

const Dialog: React.FC<PropsType> = ({
  children,
  title,
  showDialog,
  setShowDialog,
  id,
  size = "50%",
}) => {
  return (
    <>
      <DialogInputClose
        id={id}
        type="checkbox"
        onChange={() => setShowDialog(false)}
        checked={showDialog}
      />
      <DialogContainer opened={showDialog}>
        <DialogLabelClose
          htmlFor={id}
          onClick={() => setShowDialog(false)}
        ></DialogLabelClose>
        <DialogContent opened={showDialog} style={{ width: size }}>
          <DialogCloseButton htmlFor={id}></DialogCloseButton>
          <h2>{title}</h2>
          {children}
        </DialogContent>
      </DialogContainer>
    </>
  );
};

export default Dialog;
