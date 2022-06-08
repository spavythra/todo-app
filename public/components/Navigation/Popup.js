import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box-popup">
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;