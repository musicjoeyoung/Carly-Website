import "./Footer.scss"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="socialContainer">
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
