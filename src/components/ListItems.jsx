import React from 'react';
import './ListItems.css';


function ListItems() {
  const arr = ["Modern Dashboard Item", "Live Sync Active", "Real-time Updates"];

  return (
    <div className="list-container">
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
            <li key={index} className="premium-item">
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
