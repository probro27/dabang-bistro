import React, { useState, useEffect } from "react";
import Header from "./Homepage/Header";
import Viewer from "./All_Pages/Viewer";
import AboutSection from "./Homepage/AboutSection";
import Features from "./Homepage/Features";
import Footer from "./All_Pages/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Scroll from "./All_Pages/Scroll";

function Home() {
  const [loading, setLoading] = useState(false);

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    document.title = "Home";
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
          <Header />
          <Viewer message="Welcome You" />
          <AboutSection />
          <Features />
          <Footer />
          <Scroll showBelow={250} />
        </div>
      )}
    </div>
  );
}

export default Home;
