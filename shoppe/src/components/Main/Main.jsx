import '../Main/main.scss';
import { ItemsImg } from '../UI/ItemsImg';
import LiraEarrings from '../img/main/LiraEarrings.png';
import HalEarrings from '../img/main/HalEarrings.png';
import KaedeHairPinSetOf3 from '../img/main/KaedeHairPinSetOf3.png';
import HairPinSetof3 from '../img/main/HairPinSetof3.png';
import PlaineNecklace from '../img/main/PlaineNecklace.png';
import YukiHairPinSetof3 from '../img/main/YukiHairPinSetof3.png';
import React from 'react';
import cart from '../img/main/cart.svg';
import eye from '../img/main/eye.svg';
import heart from '../img/main/heart.svg';
import { useState } from 'react';
import Item from '../UI/Item';

const Main = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      img: LiraEarrings,
      name: 'Lira Earrings',
      price: '$ 20,00',
    },
    {
      id: 2,
      img: HalEarrings,
      name: 'Hal Earrings',
      price: '$ 25,00',
    },
    {
      id: 3,
      img: KaedeHairPinSetOf3,
      name: 'Kaede Hair Pin Set Of 3 ',
      price: '$ 30,00',
    },
    {
      id: 4,
      img: HairPinSetof3,
      name: 'Hair Pin Set of 3',
      price: '$ 30,00',
    },
    {
      id: 5,
      img: PlaineNecklace,
      name: 'Plaine Necklace',
      price: '$ 19,00',
    },
    {
      id: 6,
      img: YukiHairPinSetof3,
      name: 'Yuki Hair Pin Set of 3',
      price: '$ 29,00',
    },
  ]);

  return (
    <section className="main">
      <div className="container">
        <div className="main__text">
          <h1 className="main__text-h1">Shop The Latest</h1>
          <p className="main__text-p">View All</p>
        </div>
        <div className="main__items">
          {posts.map((post) => (
            <Item key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
