import React from "react";

function Preloader(props) {
  return (
     <div className="preloader">
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
}

export default Preloader;
