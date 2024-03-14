import { Dispatch, SetStateAction } from "react";
import Modal from ".";

interface IDeleteModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  labelConfirm?: string;
  labelCancel?: string;
  onConfirm: () => void;
  buttonType?: "button" | "submit" | "reset";
  objectToBeDeleted: string;
}

const DeleteConfirmationModal = ({
  title,
  children,
  closeModal,
  isOpen,
  labelConfirm,
  labelCancel,
  onConfirm,
  buttonType,
  objectToBeDeleted,
}: IDeleteModalProps) => {
  return (
    <Modal
      title={title}
      closeModal={closeModal}
      isOpen={isOpen}
      onConfirm={onConfirm}
      labelCancel={labelCancel}
      labelConfirm={labelConfirm}
      buttonType={buttonType}
    >
      <p className="text-gray-500">
        Los datos de{" "}
        <span className="font-bold text-white">{objectToBeDeleted}</span> serán
        eliminados permanentemente, esta acción es irreversible. <br />
        <span className="font-bold text-red-400">
          Estás seguro que quieres eliminarlo?
        </span>
      </p>
      <form className="py-4">{children}</form>
    </Modal>
  );
};

export default DeleteConfirmationModal;
