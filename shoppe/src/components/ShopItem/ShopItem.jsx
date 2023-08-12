import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Rating } from '@mui/material';
import Icons from '../UI/Icons';
import LiraEarrings from '../img/main/LiraEarrings.png';
import ImgForShop from '../UI/ImgForShop';

const ShopItem = () => {
  // const [miniImg, setMiniImg] = useState([
  //   {
  //     id: 1,
  //     img: <LiraEarrings />,
  //   },
  //   {
  //     id: 2,
  //     img: <LiraEarrings />,
  //   },
  //   {
  //     id: 3,
  //     img: <LiraEarrings />,
  //   },
  //   {
  //     id: 4,
  //     img: <LiraEarrings />,
  //   },
  // ]);
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
    <section className="lira">
      <div className="container">
        <div className="lira__content">
          <div className="lira__ul">
            {/* {miniImg.map((item) => (
              <ImgForShop item={item} key={item.id} />
            ))} */}
          </div>
          <img src={LiraEarrings} alt="LiraEarrings" className="lira__img" />
          <div className="lira__description">
            <h1 className="lira__description-title">Lira Earrings</h1>
            <p className="lira__description-price">$ 20,00</p>
            <div className="lira__description-rating">
              <Rating />
            </div>
            <p className="lira__description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
              volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed
              quis mauris eget arcu facilisis consequat sed eu felis.
            </p>
            <div className="lira__description-addtocart">
              <p>1</p>
              <button></button>
            </div>
            <div className="lira__description-socials">
              {icons.map((icon) => (
                <Icons icon={icon} key={icon.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopItem;
