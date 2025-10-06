import React, { useState } from "react";

const PropDrillingExample = () => {
  const [zayedaat, setZayedaat] = useState("House");
  return (
    <div className="h-screen p-2 bg-cyan-300 w-screen">
      <GrandParent passedItem={zayedaat} />
    </div>
  );
};

const GrandParent = ({ passedItem }) => {
  return (
    <div className="w-1/2 h-1/2 p-2 border-2 border-orange-600">
      <p>car</p>
      <h1>i am GrandParent</h1>
      <Parent passedItem={passedItem} />
    </div>
  );
};
const Parent = ({ passedItem }) => {
  return (
    <div className="w-1/2 p-2 h-1/2 border-2 border-green-600">
      <p>car</p>
      <h1>i am Parent</h1>
      <Child passedItem={passedItem} />
    </div>
  );
};
const Child = ({ passedItem }) => {
  return (
    <div className="w-1/2 h-1/2 border-2 border-blue-600">
      <p>car</p>
      <h1>i am Child</h1>
      <p>
        <strong>family item is : </strong>
        {passedItem}
      </p>
    </div>
  );
};

export default PropDrillingExample;
