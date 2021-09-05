import React from "react";
import "../styles.css";

function PicturePanelItem(props) {
  return (
    <div className="gallery-item">
      <a href={props.src} className="venobox" data-gall="gallery-item">
        <img src={props.src} alt="" className="img-fluid" width="100%" />
      </a>
    </div>
  );
}

export default PicturePanelItem;
