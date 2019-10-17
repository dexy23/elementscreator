import React, { useState, useEffect } from "react";
import Header from './Header';

const ElementsCreator = () => {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('elements') ? JSON.parse(localStorage.getItem('elements')) : [];
    setItems(items);
  }, [])
  const handleSubmit = () => {
    const elements = [...items, item]
    localStorage.setItem("elements", JSON.stringify(elements))
  }
  return (
    <>
      <Header page='newitem'/>
      <div className="elementsCreatorMain">
        <form onSubmit={handleSubmit}>
          <input id="elementInput" onChange={e => setItem({ text: e.target.value, key: Date.now() })}
            placeholder="New item title...">
          </input>
          <button type="submit">add</button>
        </form>
      </div>
    </>
  );
}

export default ElementsCreator;