// Assignment of 10th March

import React, { useState } from 'react';

function DynamicListApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      setItems([...items, text]);
      setText("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Task List</h1>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="New task..."
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>{item}</span>
            <button onClick={() => handleDelete(index)} style={{ color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicListApp;