import React, { useState } from 'react';
import '../Footer/footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Icons from '../UI/Icons';
import Form from '../UI/Form';

const Footer = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      img: <LinkedInIcon />,
      name: 'LinkedIn',
    },
    {
      id: 2,
      img: <FacebookIcon />,
      name: 'Facebook',
    },
    {
      id: 3,
      img: <InstagramIcon />,
      name: 'Instagram',
    },
    {
      id: 4,
      img: <TwitterIcon />,
      name: 'Twitter',
    },
  ]);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__line"></div>
        <div className="footer__content">
          <div className="footer__content-text">
            <ul className="footer__ul">
              <li className="footer__li">CONTACT</li>
              <li className="footer__li">TERMS OF SERVICES</li>
              <li className="footer__li">SHIPPING AND RETURNS</li>
            </ul>
            <Form />
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-copyright">
            <p>
              © 2021 Shelly.<span className="bottom__span"> Terms of use</span> and
              <span className="bottom__span"> privacy policy</span>.
            </p>
            <div className="footer__bottom-icons">
              {icons.map((icon) => (
                <Icons icon={icon} key={icon.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
