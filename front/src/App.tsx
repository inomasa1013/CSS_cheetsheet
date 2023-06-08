import React, { useState, createContext, useContext } from "react";

/**
 * Description placeholder
 * 大元となるコンテキスト、string型の配列
 * @type {*}
 */
const masterContext = createContext<string[]>([]);

// App-----
const App: React.FC = () => {
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
    <div>
      <button onClick={addElements}>Add Element</button>
      <masterContext.Provider value={elements}>
        <CreateCard elements={elements} onDelete={deleteElement} />
      </masterContext.Provider>
    </div>
  );
};
// App~~~~~
// CreateCard-----
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
    <div>
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
