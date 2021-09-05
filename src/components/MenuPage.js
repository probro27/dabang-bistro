import React, { useState, useEffect } from "react";
import Viewer from "./All_Pages/Viewer";
import HeaderMenu from "./MenuPage/HeaderMenu";
import MenuBar from "./MenuPage/MenuBar";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function MenuPage() {
  const [loading, setLoading] = useState(false);

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader
          color="#f9921a"
          loading={loading}
          css={override}
          size={80}
        />
      ) : (
        <div>
          <HeaderMenu />
          <Viewer message="Menu / Online Order" />
          <MenuBar />
        </div>
      )}
    </div>
  );
}

export default MenuPage;
