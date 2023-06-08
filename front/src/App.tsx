import "./styles/style.scss";

import React, { useState, createContext, useContext, useEffect } from "react";
import { JsxElement } from "typescript";

/**
 * Description placeholder
 * 大元となるコンテキスト、string型の配列
 * @type {*}
 */
const masterContext = createContext<string[]>([]);

// REVIEW App-----
const App: React.FC = async () => {
  const allCss = useEffect(() => {
    (async () => {
      await fetch("/api/data", { method: " GET" });
    })();
  }, []);

  const [elements, setElements] = useState<string[]>([]);
  const [database, SetDatabase] = useState<object[] | void>();

  const addElements = (): void => {
    const newElement: string = "i am new ele";
    setElements([...elements, newElement]);
  };

  const deleteElement = (index: number): void => {
    const updatedElements: string[] = [...elements];
    updatedElements.splice(index, 1);
    setElements(updatedElements);
  };

  return (
    <div className="wrapper">
      <section className="container">
        <header>plz your favorite CSS :| </header>
        <button className="createCard" onClick={addElements}>
          Add CSS Card!
        </button>
        <masterContext.Provider value={elements}>
          <CreateCard elements={elements} onDelete={deleteElement} />
        </masterContext.Provider>
      </section>
    </div>
  );
};
// App~~~~~
// REVIEW CreateCard-----
interface CreateCardProps {
  elements: string[];
  onDelete: (index: number) => void;
}
/**
 * Description placeholder
 * Appによって生成された削除ボタン付きのcard
 * @param {{ elements: any; onDelete: any; }} { elements, onDelete }
 * @returns {Element}
 */
const CreateCard: React.FC<CreateCardProps> = ({ elements, onDelete }) => {
  const childContext = useContext(masterContext);
  console.log(childContext);
  return (
    <div className="card">
      {elements.map((element: any, index: number) => (
        <div key={index}>
          {element}
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

// CreateCard~~~~~
export default App;
