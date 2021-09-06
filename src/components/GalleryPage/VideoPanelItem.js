import React from "react";

function VideoPanelItem(props) {
  return (
      <div className="col-lg-3 embed-responsive embed-responsive-16by9 z-depth-1-half">
        <iframe
          className="embed-responsive-item"
          width="300px"
          height="auto"
          src={props.src}
          allowfullscreen
        ></iframe>
      </div>
  );
}

export default VideoPanelItem;
