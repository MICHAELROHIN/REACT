import React, { useState } from "react";
import "./App.css"

const Background = () => {
  const [bgColour, setBgColour] = useState("#ffffff");

  const changingColour = (color) => {
    setBgColour(color);
  };

  return (
    <div
      style={{ backgroundColor: bgColour, height: "100vh", padding: "20px", textAlign: "center"}}
    >
      <h2 className="text-2xl font-bold text-black mb-6">Change Background Color</h2>

    
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white to-gray-100 shadow-lg rounded-t-2xl flex flex-wrap justify-center gap-4">
        <button onClick={() => changingColour("#3D8D7A")} className="big-btn">Light Green</button>
        <button onClick={() => changingColour("#B3D8A8")} className="big-btn">Teal</button>
        <button onClick={() => changingColour("#3F4F44")} className="big-btn">Grey</button>
        <button onClick={() => changingColour("#001A6E")} className="big-btn">Dark Blue</button>
        <button onClick={() => changingColour("#009990")} className="big-btn">Light Blue</button>
        <button onClick={() => changingColour("#E52020")} className="big-btn">Red</button>
        <button onClick={() => changingColour("#ffffff")} className="big-btn">Reset</button>
      </div>
    </div>
  );
};

export default Background;
