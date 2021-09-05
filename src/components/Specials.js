import React, { useState, useEffect } from "react";
import HeaderSpecial from "./Special/HeaderSpecial";
import Viewer from "./All_Pages/Viewer";
import Gallery from "./Special/Gallery";
import Footer from "./All_Pages/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Scroll from "./All_Pages/Scroll";

function Specials() {
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
          <HeaderSpecial />
          <Viewer message="Specials" />
          <Gallery />
          <Footer />
          <Scroll showBelow={250} />
        </div>
      )}
    </div>
  );
}

export default Specials;
