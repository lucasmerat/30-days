import React from "react";

var redirect;

if (process.env.NODE_ENV === "development") {
  redirect = "localhost:5000/api/login";
} else {
  redirect = "/api/login";
}

function Jumbotron() {
  return (
    <>
      <img
        style={{ padding: "10%" }}
        alt="login with instagram"
        src="https://pngimage.net/wp-content/uploads/2018/06/guest-icon-png-2.png"
      />
      <br />
      <a href={redirect}>Login with instagram</a>
    </>
  );
}

export default Jumbotron;
