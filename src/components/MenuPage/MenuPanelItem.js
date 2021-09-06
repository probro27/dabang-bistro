import React from "react";

function MenuPanelItem(props) {
  return (
    <div>
      <div class="menu-item filter-starters">
        <img src={props.src} class="menu-img" alt="" />
        <div class="menu-content">
          <a href="#">{props.name}</a>
          <span>{props.price}</span>
        </div>
        <div class="menu-ingredients">{props.description}</div>
        <div class="float-left" style={{  width: "60%" }}>
          <span class="text-white">Add more: </span>
          <select name="favourite" id="favourite">
            <option value="a">Options</option>
            <option value="b">Apple-Juice</option>
            <option value="c">Chaas + $1</option>
            <option value="d">Club-Soda</option>
            <option value="e">Coffee + $1</option>
            <option value="f">Coke</option>
            <option value="g">Coke-Zero</option>
            <option value="h">Diet-Coke</option>
            <option value="i">Ginger-Ale</option>
            <option value="j">Green-Tea + $1</option>
            <option value="k">Imli-Twist + $2</option>
            <option value="l">Lemonade + $1</option>
            <option value="m">Mango-Lassi + $3</option>
            <option value="n">Mango-Shake + $3</option>
            <option value="o">Masala-Chai + $1</option>
            <option value="p">Nestea</option>
            <option value="q">Orange-Fanta</option>
            <option value="r">Orange-Juice + $1</option>
            <option value="s">Salted-Lassi + $3</option>
            <option value="t">Sprite</option>
            <option value="u">Sweet-Lassi + $3</option>
            {/* </optgroup> */}
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
                borderBottom: "1px solid #5d5d5d"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuPanelItem;
