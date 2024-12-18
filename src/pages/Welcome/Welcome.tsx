import "./Welcome.scss"

const Welcome = () => {
  return (
    <div className="page">
      <div className="image-wrapper">
        <h1 className="page-title">Welcome</h1>
        <img
          src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674616311/CarlyWebsiteWelcome-min_pjn38b.png"
          className="welcome-image"
          alt="Welcome"
        />
      </div>
    </div>
  );
};

export default Welcome;
