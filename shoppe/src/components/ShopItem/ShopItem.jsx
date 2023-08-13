import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ToggleButton, Rating } from '@mui/material';
import Icons from '../UI/Icons';
import Lira from '../../components/img/main/LiraEarrings.png';
import '../ShopItem/shopItem.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//  Карточка товара

const ShopItem = () => {
  const [changeBtn, setChangeBtn] = useState(false);
  const [counter, setCounter] = useState(1);
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
  const changeColorBtn = () => {
    setChangeBtn(true);
  };
  const incr = () => {
    setCounter(counter + 1);
  };
  const decr = () => {
    if (counter <= 1) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <section className="shop__item">
      <div className="container">
        <div className="shop__item-content">
          <div className="shop__ul">
            <li className="shop__li">
              <img src={Lira} alt={Lira} />
            </li>
            <li className="shop__li">
              <img src={Lira} alt={Lira} />
            </li>
            <li className="shop__li">
              <img src={Lira} alt={Lira} />
            </li>
            <li className="shop__li">
              <img src={Lira} alt={Lira} />
            </li>
          </div>
          <img src={Lira} alt="LiraEarrings" className="shop__img" />
          <div className="shop__description">
            <h1 className="shop__description-title">Lira Earrings</h1>
            <p className="shop__description-price">$ 20,00</p>
            <div className="shop__description-rating">
              <Rating />
            </div>
            <p className="shop__description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
              volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed
              quis mauris eget arcu facilisis consequat sed eu felis.
            </p>
            <div className="shop__description-addtocart">
              <div className="counter">
                <p className="descr__counter" onClick={() => decr()}>
                  -
                </p>
                <p>{counter}</p>
                <p className="descr__counter" onClick={() => incr()}>
                  +
                </p>
              </div>
              {changeBtn ? (
                <ToggleButton
                  sx={{
                    borderRadius: '4px',
                    border: '1px solid var(--light-colors-black-light, #f24040)',
                    background: 'var(--light-colors-white-light, #f24040)',
                    width: '360px',
                    fontFamily: 'DM Sans',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    color: 'var(--light-colors-black-light, #000)',
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                </ToggleButton>
              ) : (
                <ToggleButton
                  onClick={() => changeColorBtn()}
                  sx={{
                    borderRadius: '4px',
                    border: '1px solid var(--light-colors-black-light, #000)',
                    background: 'var(--light-colors-white-light, #FFF)',
                    width: '360px',
                    fontFamily: 'DM Sans',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    color: 'var(--light-colors-black-light, #000)',
                  }}
                >
                  Add to cart
                </ToggleButton>
              )}
            </div>
            <div className="shop__description-socials">
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
