import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ cartTotal, setCartTotal }) => {
  const initialItems = [
    { name: "Tea", price: 15, quantity: 0 },
    { name: "Special Tea", price: 20, quantity: 0 },
    { name: "Coffee", price: 20, quantity: 0 },
    { name: "Milk", price: 15, quantity: 0 },
    { name: "Green Tea", price: 20, quantity: 0 },
    { name: "Boost", price: 25, quantity: 0 },
  ];

  const [items, setItems] = useState(initialItems);

  const increment = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);

    // Update cart total in parent state
    setCartTotal(cartTotal + updatedItems[index].price);
  };

  const decrement = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);

      // Update cart total in parent state
      setCartTotal(cartTotal - updatedItems[index].price);
    }
  };

  return (
    <>
      <section id="menu" className="menu">
        <h2>Our Menu</h2>
        <div className="menu-list">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="controls">
                <button
                  onClick={() => decrement(index)}
                  disabled={item.quantity === 0}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
 