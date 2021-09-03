import React, {useState} from "react";
import "./styles.css"
import { Carousel, CarouselItem } from "react-bootstrap";

function Viewer(props) {
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
        >
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
                {/* <h2 id="ttb">Taste The Best</h2> */}
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
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
                <h1 id="wy">{props.message}</h1>
                {
                  props.message == "Welcome You"?
                  <h2 id="ttb">Taste the Best</h2>:
                  null
                }
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Viewer;
