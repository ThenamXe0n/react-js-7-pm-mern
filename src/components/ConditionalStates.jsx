const tabItems = ["html", "css", "javascript", "react js"];
import { useState } from "react";
const ConditionalStates = () => {
  const [activeTab, setActiveTab] = useState("html");
  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <section className="h-screen p-10 bg-cyan-300">
      <div className="flex ">
        {tabItems.map((item, tabIdx) => (
          <button
            onClick={() => {
              handleTabChange(item);
            }}
            key={tabIdx}
            className={`p-2  uppercase font-bold ${
              activeTab === item
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="p-4  border-t-2 bg-white text-xl font-semibold  min-h-96">
        {activeTab === "html" && <p>html is a markup language</p>}
        {activeTab === "css" && <p>css is a styling language</p>}
        {activeTab === "javascript" && (
          <p>javascript is a programming language</p>
        )}
        {activeTab === "react js" && (
          <p>react is a javascript frontend liberary</p>
        )}
      </div>
    </section>
  );
};


export default ConditionalStates;
