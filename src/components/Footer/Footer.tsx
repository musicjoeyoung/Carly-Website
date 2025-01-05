import "./Footer.scss"

import bluesky from "../../assets/images/bluesky.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socialContainer">
        <a
          href="https://bsky.app/profile/carlyanderson.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bluesky} alt="Bluesky icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
