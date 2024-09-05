"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  styleModel: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  isHovered: boolean;
  setStyleModal: (value: { height: number; left: number; top: number; width: number }) => void;
  setIsHovered: (value: boolean) => void;
  setActual:(value: { src: string; href: string }) => void;
  actualData:{ src: string; href: string } | null
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [actualData,setActual] = useState< { src: string; href: string } | null>( null)
  const [styleModel, setStyleModal] = useState({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        styleModel,
        isHovered,
        setStyleModal,
        setIsHovered,
        setActual,
        actualData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
