/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect, RefObject } from "react";
import ReactDom from "react-dom/client";

type props = {
  domdom: RefObject<HTMLInputElement>;
};

const addButton: React.FC<props> = ({ domdom }) => {
  const createCard = <div>YaY</div>;

  useEffect(() => {
    console.log({ domdom });
  });

  return <button>add new CSS !!</button>;
};

export default addButton;
