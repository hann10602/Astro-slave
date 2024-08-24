"use-client";
import React from "react";

type Props = {
  header?: string;
  footer?: React.ReactNode;
};

export const MyReactComponent = ({ header, footer }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAlert = () => {
    alert(header);
  };

  const handleSetLocalStorage = () => {
    localStorage.setItem("password", import.meta.env.SECRET_PASSWORD);
  };

  // document.getElementById("asd")?.addEventListener('click', () => handleAlert())

  return (
    <div className="bg-white text-black mb-20">
      {isOpen && <p className="bg-green-600 text-white">{header}</p>}

      <button onClick={handleToggle}>Click me</button>
      <button id="asd" onClick={handleSetLocalStorage}>
        Click me 2
      </button>
      {isOpen && footer}
    </div>
  );
};
