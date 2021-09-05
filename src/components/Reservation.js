import React, { useState, useEffect } from "react";
import Footer from "./All_Pages/Footer";
import Viewer from "./All_Pages/Viewer";
import BookTable from "./Reservation/BookTable";
import HeaderReserve from "./Reservation/HeaderReserve";
import Parallax from "./Reservation/Parallax";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Scroll from "./All_Pages/Scroll";

function Reservation() {
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
          <HeaderReserve />
          <Viewer message="Reservation" />
          <Parallax />
          <BookTable />
          <Footer />
          <Scroll showBelow={250} />
        </div>
      )}
    </div>
  );
}

export default Reservation;
