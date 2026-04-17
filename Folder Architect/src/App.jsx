// Assignment of 19th March

import React, { useState } from "react";

const folderData = {
  name: "Project Files",
  isFolder: true,
  items: [
    { name: "index.html", isFolder: false },
    { name: "style.css", isFolder: false },
    { 
      name: "Images", 
      isFolder: true, 
      items: [
        { name: "logo.png", isFolder: false },
        { name: "background.jpg", isFolder: false }
      ] 
    },
  ]
};

function Folder({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (data.isFolder) {
    return (
      <div style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ cursor: "pointer", fontWeight: "bold", padding: "5px", display: "flex", alignItems: "center" }}
        >
          <span>{isOpen ? "📂" : "📁"} {data.name}</span>
        </div>

        {isOpen && (
          <div style={{ borderLeft: "1px solid #ccc", marginLeft: "10px" }}>
            {data.items.map((item, index) => (
              <Folder key={index} data={item} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ marginLeft: "25px", padding: "2px", fontFamily: "sans-serif" }}>
      📄 {data.name}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>Folder Architect</h1>
      <Folder data={folderData} />
    </div>
  );
}