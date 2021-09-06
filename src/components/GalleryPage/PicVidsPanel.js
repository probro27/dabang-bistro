import { Tabs, Tab, Row } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import PicturePanelItem from "./PicturePanelItem";
import VideoPanelItem from "./VideoPanelItem";

function PicVidsPanel() {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>Pictures & Videos</p>
        </div>
        {/* <ul className="nav nav-tabs justify-content-center" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#tabs-1"
              role="tab"
            >
              Pictures
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
              Videos
            </a>
          </li>
        </ul> */}
        <Tabs defaultActivekey="pictures" className="">
          <Tab eventKey="pictures" title="Pictures">
            <PictureGrid>
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/1.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/2.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/3.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/4.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/5.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/6.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/8.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/9.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/10.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/11.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/12.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/13.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/14.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/15.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/16.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/17.jpg" />
              <PicturePanelItem src="http://dabangbistro.com/assets/img/Gallery/18.jpg" />
            </PictureGrid>
          </Tab>
          <Tab eventKey="videos" title="Video">
            <Row>
              <VideoPanelItem src="https://www.youtube.com/embed/IeZmgACQU1A" />
              <VideoPanelItem src="https://www.youtube.com/embed/-O5G9fUZ948" />
              <VideoPanelItem src="https://www.youtube.com/embed/Fy1f0Nw4mSQ" />
              <VideoPanelItem src="https://www.youtube.com/embed/3bTUfIOeXj8" />
            </Row>
            <Row>
              <VideoPanelItem src="https://www.youtube.com/embed/pL1XdY-JzRg" />
              <VideoPanelItem src="https://www.youtube.com/embed/VItzFNjggGo" />
              <VideoPanelItem src="https://www.youtube.com/embed/zSwCVUlpHig" />
              <VideoPanelItem src="https://www.youtube.com/embed/v0FATKO08-E" />
            </Row>
            <Row>
              <VideoPanelItem src="https://www.youtube.com/embed/WPaKzK7DcGI" />
              <VideoPanelItem src="https://www.youtube.com/embed/-Ax1sNbzrt8" />
              <VideoPanelItem src="https://www.youtube.com/embed/CIt29pJDHy4" />
              <VideoPanelItem src="https://www.youtube.com/embed/gYPGthbVHqI" />
            </Row>
          </Tab>
        </Tabs>
        <div className="tab-content">
          <div className="tab-pane active" id="tabs-1" role="tabpanel"></div>
        </div>
      </div>
    </section>
  );
}

export default PicVidsPanel;

const PictureGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

// const VideoGrid = styled.div(PictureGrid);
