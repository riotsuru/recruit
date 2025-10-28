import { ModalContents } from "./ModalContents";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormDataType) => void;
};

export type FormDataType = {
  companyName: string;
  remote: string;
  income: string;
  rating: string;
};

export const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <ModalContents onClose={props.onClose} onSubmit={props.onSubmit} />
      </div>
    </div>
  );
};
