import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socialContainer">
        <a
          href="https://twitter.com/carlyfanderson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./TwitterIcon.png" alt="Twitter icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
