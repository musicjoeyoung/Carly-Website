import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Welcome = () => {
  return (
    <div className="App">
      <div id="canvas">
        <Header />
        <div id="hero">
          <div className="image-wrapper">
            <h1 className="page-title">Welcome</h1>
            <img src="./CarlyWebsiteWelcome.png" className="welcome-image" />
          </div>
          {/*          <div className="wrapper">
            <h1 className="page-title">Welcome</h1>
            <div className="page-description"></div>
          </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Welcome;
