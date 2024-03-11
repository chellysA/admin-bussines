"use client";
import React, { Dispatch, SetStateAction } from "react";
import { MdClear } from "react-icons/md";
import Card from "../card";
import Button from "../button";

interface IModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  labelConfirm?: string;
  labelCancel?: string;
  onClickConfirm: () => void;
}

const Modal = ({
  title,
  children,
  closeModal,
  isOpen,
  labelConfirm = "Confirmar",
  labelCancel = "Cancelar",
  onClickConfirm,
}: IModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-blackOpacity z-50">
          <Card className="p-4 max-w-[50%] max-h-[70%] overflow-y-auto overflow-x-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button
                onClick={() => closeModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdClear className="text-[25px]" />
              </button>
            </div>
            <div className="p-2">{children}</div>
            <div className="flex justify-end gap-5">
              <Button
                label={labelCancel}
                secondaryButton
                onClick={() => closeModal(false)}
              />
              <Button label={labelConfirm} onClick={onClickConfirm} />
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Modal;
