import '../Main/main.scss';
import LiraEarrings from '../img/main/LiraEarrings.png';
import HalEarrings from '../img/main/HalEarrings.png';
import KaedeHairPinSetOf3 from '../img/main/KaedeHairPinSetOf3.png';
import HairPinSetof3 from '../img/main/HairPinSetof3.png';
import PlaineNecklace from '../img/main/PlaineNecklace.png';
import YukiHairPinSetof3 from '../img/main/YukiHairPinSetof3.png';
import cart from '../img/main/cart.svg';
import eye from '../img/main/eye.svg';
import heart from '../img/main/heart.svg';
import { useState } from 'react';

const Main = () => {
  const [hidden, setHidden] = useState(true);
  const [like, setLike] = useState(false);

  const handleEnterLike = () => {
    setLike(true);
  };

  const handleEnterMouseHidden = () => {
    setTimeout(() => {
      setHidden(true);
    }, 200);
  };
  const handleLeaveMouseHidden = () => {
    setTimeout(() => {
      setHidden(false);
    }, 200);
  };
  return (
    <section className="main">
      <div className="container">
        <div className="main__text">
          <h1 className="main__text-h1">Shop The Latest</h1>
          <p className="main__text-p">View All</p>
        </div>
        <div className="main__items">
          <div className="main__item">
            {hidden && (
              <div className="main__icons ">
                <img
                  onClick={handleEnterLike}
                  src={cart}
                  alt="cart"
                  className={like ? 'main__icon-like' : 'main__icon'}
                />
                <img src={eye} alt="eye" className="main__icon" />
                <img src={heart} alt="heart" className="main__icon" />
              </div>
            )}
            <img
              onMouseLeave={handleLeaveMouseHidden}
              onMouseEnter={handleEnterMouseHidden}
              src={LiraEarrings}
              alt="LiraEarrings"
              className="main__item-img"
            />
            <h2 className="main__item-name">Lira Earrings</h2>
            <p className="main__item-price">$ 20,00</p>
          </div>
          <div className="main__item">
            <img src={HalEarrings} alt="HalEarrings" className="main__item-img" />
            <h2 className="main__item-name">Hal Earrings</h2>
            <p className="main__item-price">$ 25,00</p>
          </div>
          <div className="main__item">
            <img src={KaedeHairPinSetOf3} alt="KaedeHairPinSetOf3" className="main__item-img" />
            <h2 className="main__item-name">Kaede Hair Pin Set Of 3</h2>
            <p className="main__item-price">$ 30,00</p>
          </div>
          <div className="main__item">
            <img src={HairPinSetof3} alt="HairPinSetof3" className="main__item-img" />
            <h2 className="main__item-name">Hair Pin Set of 3</h2>
            <p className="main__item-price">$ 30,00</p>
          </div>
          <div className="main__item">
            <img src={PlaineNecklace} alt="PlaineNecklace" className="main__item-img" />
            <h2 className="main__item-name">Plaine Necklace</h2>
            <p className="main__item-price">$ 19,00</p>
          </div>
          <div className="main__item">
            <img src={YukiHairPinSetof3} alt="YukiHairPinSetof3" className="main__item-img" />
            <h2 className="main__item-name">Yuki Hair Pin Set of 3 </h2>
            <p className="main__item-price">$ 29,00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
