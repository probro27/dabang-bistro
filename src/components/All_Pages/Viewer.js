import React, {useState} from "react";
import "./styles.css"
import { Carousel, CarouselItem } from "react-bootstrap";

function Viewer() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        id="demo"
        className="carousel slide position-relative text-center text-lg-left"
        data-ride="carousel"
        // style="height: 100vh;"
      >
        {/* <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
            <li data-target="#demo" data-slide-to="6"></li>
            <li data-target="#demo" data-slide-to="7"></li>
            <li data-target="#demo" data-slide-to="8"></li>
            <li data-target="#demo" data-slide-to="9"></li>
          </ul> */}
        <Carousel activeIndex = {index} onSelect = {handleSelect}>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture1).jpg"
              alt="Los Angeles"
              width="1100"
            //   style={{height:"100vh"}}
            />
            <Carousel.Caption className = "slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
           <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture2).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture3).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture4).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture5).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture6).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture7).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture7).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture8).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture9).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>//style="height:100vh;"
            <img
              src="http://dabangbistro.com/assets/img/head-slider/DB%20email%202(Picture10).jpg"
              alt="Los Angeles"
              width="1100"
            //   style="height:100vh"
            />
            <Carousel.Caption className="slider-margin">
              <div className="col-lg-12">
                <h1 id="db_hd">
                  <span>Dabang Bistro</span>
                </h1>
                <h1 id="wy">Welcomes You</h1>
                <h2 id="ttb">Taste The Best</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Viewer;
