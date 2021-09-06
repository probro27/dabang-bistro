import React from "react";
import MenuPanelItem from "./MenuPanelItem";
import styled from "styled-components";

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
      {!props.onlyVeg ? (
        <div class="row mt-5" data-aos-delay="200">
          <div class="col-6 text-center">
            <p
              id="orange"
              style={{ fontSize: "35px", color: "white" }}
              className="mb-0"
            >
              Vegetarian
            </p>
          </div>
          <div class="col-6 text-center">
            <p
              class="mb-0"
              style={{ fontSize: "35px", color: "white" }}
              id="orange"
            >
              Non-Vegetarian
            </p>
          </div>
        </div>
      ) : (
        <div class="row mt-5" data-aos-delay="200">
          <div class="col-6 text-center">
            <p
              id="orange"
              style={{ fontSize: "35px", color: "white" }}
              className="mb-0"
            >
              Vegetarian
            </p>
          </div>
          <div class="col-6 text-center">
            <p
              class="mb-0"
              style={{ fontSize: "35px", color: "white" }}
              id="orange"
            >
              Vegetarian
            </p>
          </div>
        </div>
      )}
      <MenuGrid>
        {console.log(props.items)}
        {props.items
          ? props.items.map((item) => {
              return (
                <MenuPanelItem
                  name={item.name}
                  description={item.description}
                  src={item.src}
                  price={item.price}
                  add={item.add_ons}
                />
              );
            })
          : null}
      </MenuGrid>
    </div>
  );
}

export default MenuPanel;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 10px;
`;
