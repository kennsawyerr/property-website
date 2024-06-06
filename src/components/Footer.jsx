const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <ul className="flex sect-pad space-around">
            <li>
              <div>
                <div className="logo">Monte</div>
                <div className="hero-subtext">Lorem ipsum dolor sit.</div>
              </div>
            </li>

            <li>
              <div>
                <div className="logo">Mon2</div>
                <div className="hero-subtext">Lorem ipsum dolor sit.</div>
              </div>
            </li>
            <li>
              <div>
                <div className="logo">Mon3</div>
                <div className="hero-subtext">Lorem ipsum dolor sit.</div>
              </div>
            </li>
          </ul>

          <ul className="flex sect-pad space-around">
            <li>
              <div>
                <div className="">Subscribe for news</div>
                <div className="hero-subtext">Lorem ipsum dolor sit.</div>
                <div className="contact">Lorem, ipsum.</div>
                <button>Contact Us</button>
              </div>
            </li>

            <li>
              <div>
                <div className="">Map-box goes here</div>
                <div className="hero-subtext">Lorem ipsum dolor sit.</div>
              </div>
            </li>
            <li>
              <div>
                <div className="hero-subtext">
                  &copyMonte 2024 Lorem ipsum dolor sit.
                </div>
                <div>
                  <div>Privacy Policy</div> <div>Cookies</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
