import React, {useState, useEffect} from "react";
import Footer from "./All_Pages/Footer";
import Viewer from "./All_Pages/Viewer";
import ComingSoon from "./Loyalty/ComingSoon";
import HeaderLoyalty from "./Loyalty/HeaderLoyalty";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function Loyalty() {
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
          <HeaderLoyalty />
          <Viewer message="Loyalty Programs" />
          <ComingSoon />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Loyalty;
