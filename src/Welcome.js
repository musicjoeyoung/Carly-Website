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
            <img
              src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674616311/CarlyWebsiteWelcome-min_pjn38b.png"
              className="welcome-image"
              alt="Welcome"
            />
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
