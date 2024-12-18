import "./Welcome.scss"

const Welcome = () => {
  return (
    <div className="page">
      <div className="page__image-wrapper">
        <h1 className="page__title">Welcome</h1>
        <img
          src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674616311/CarlyWebsiteWelcome-min_pjn38b.png"
          className="page__welcome-image"
          alt="Welcome"
        />
      </div>
    </div>
  );
};

export default Welcome;
