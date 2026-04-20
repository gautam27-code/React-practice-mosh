import React, { useState } from 'react';
import './ListItems.css';


function ListItems() {
  const arr = ["item1", "item2", "item3"];
  // function handleClick(item, index){
  //   console.log("Clicked", item, "at", index);
  // }
  const [active, setActive] = useState(null);
  const handleClick = (item, index) => {
    console.log("Clicked", item, "at", index);
    setActive(active === index ? null : index);
  }

  return (
    <div className="list-container">
      {console.log(arr)}
      <header className="list-header">
        <h1>Dashboard Items</h1>
        <p className="subtitle">Managing your digital assets with precision</p>
      </header>

      {arr.length === 0 ? (
        <div className="empty-state">
          <p>No items okokok 11 found in your collection.</p>
        </div>
      ) : (
        <ul className="premium-list">
          {arr.map((item, index) => (
            <li key={index} onClick={() => handleClick(item, index)} className={`premium-item ${active === index ? "active" : "" }`}>
              <span className="item-number">0{index + 1}</span>
              <span className="item-text">{item}</span>
              <div className="item-status">Active</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListItems;
