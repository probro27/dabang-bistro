import React from "react";
import '../styles.css'

function MenuBar() {
  return (
    <div>
      <h4 id="orange" class="text-center mb-3" style={{fontSize: "80px"}}>
        Ordering Online Coming Soon...
      </h4>
      <hr id="wrap-combo"></hr>
      <div className="container">
        <div id="navbar">
          <a href="#wrap-combo">Wrap-Combos</a>
          <a href="#breakfast">Breakfast</a>
          <a href="#chat-house">Chaat-House</a>
          <a href="#soups">Soups</a>
          <a href="#hakka-style">Hakka-Style</a>
          <a href="#appetizer">Appetizers</a>
          <a href="#main-course">Main-Course</a>
          <a href="#biryani">Rice</a>
          <a href="#dessert">Dessert</a>
          <a href="#kids-menu">Kids-Menu</a>
          <a href="#bread">Bread</a>
          <a href="#salad">Salad</a>
          <a href="#yogurt">Yogurt</a>
          <a href="#drink">Drinks</a>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
