import React from "react";

function Header(props) {
  // console.log(props.data);
  return (
    <div className="d-flex justify-content-around align-items-center header">
      <h1>Online Class</h1>
      <p>Clicked {props.data} times</p>
    </div>
  );
}

export default Header;
