import React from "react";
import MenuPanelItem from "./MenuPanelItem";
import styled from 'styled-components'

function MenuPanel(props) {
  return (
    <div className="container">
      <h3
        id="orange"
        class="filter-active text-center"
        style={{ marginTop: "1rem", fontSize: "1.8rem" }}
      >
        {props.title}
      </h3>
      {console.log(props.items)}
      {props.items
        ? props.items.map((item) => {
            return (
              <MenuGrid>
                <MenuPanelItem
                  name={item.name}
                  description={item.description}
                  src={item.src}
                  price={item.price}
                />
              </MenuGrid>
            );
          })
        : null}
    </div>
  );
}

export default MenuPanel;

const MenuGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    grid-gap : 10px;
`