import React from "react";

function MenuPanelItem(props) {
  return (
    <div class="menu-item filter-starters">
      <img src={props.src} class="menu-img" alt="" />
      <div class="menu-content">
        <a href="#">{props.name}</a>
        <span>{props.price}</span>
      </div>
      <div class="menu-ingredients">{props.description}</div>
      <div class="float-left" style={{ width: "60%" }}>
        <span class="text-white">Add more: </span>
        <select name="favourite" id="favourite">
        <option value="a">Options</option>
            {
                props.add.map((add_item) => {
                    return(
                        <option>{add_item}</option>
                    )
                })
            }
        </select>
      </div>
      <div class="float-right">
        <span class="text-white">Qty: </span>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          style={{
            background: "transparent",
            border: "none",
            borderBottom: "1px solid #5d5d5d",
          }}
        />
      </div>
    </div>
  );
}

export default MenuPanelItem;
