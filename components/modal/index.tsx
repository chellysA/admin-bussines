"use client"
import React, { Dispatch, SetStateAction } from "react";
import { MdClear } from "react-icons/md";
import Card from "../card";

interface IModalProps{
    title: string;
    children: React.ReactNode;
    closeModal:  Dispatch<SetStateAction<boolean>>;
    isOpen: boolean
}

const Modal=({title, children, closeModal, isOpen }:IModalProps)=> {

  return (
    <>
       {isOpen && 
       <div className="fixed inset-0 flex items-center justify-center bg-blackOpacity z-50">
            <Card className="p-4 w-96">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button
                    onClick={()=>closeModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <MdClear className="text-[25px]" />
                </button>
                </div>
                <div>{children}</div>
            </Card>
        </div>}
    </>
  );
}

export default Modal;
