import React from 'react';
import '../Catalog/catalog.scss';
import { useState } from 'react';
import Item from '../UI/Item';
import LiraEarrings from '../img/main/LiraEarrings.png';
import HalEarrings from '../img/main/HalEarrings.png';
import KaedeHairPinSetOf3 from '../img/main/KaedeHairPinSetOf3.png';
import HairPinSetof3 from '../img/main/HairPinSetof3.png';
import PlaineNecklace from '../img/main/PlaineNecklace.png';
import YukiHairPinSetof3 from '../img/main/YukiHairPinSetof3.png';
import IconSearch from '../Catalog/iconsearch.svg';
import { Input, InputLabel, MenuItem, Select, Switch } from '@mui/material';
import ItemForCatalog from '../UI/ItemForCatalog';

const Catalog = () => {
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
    <section className="catalog">
      <div className="container">
        <h1 className="catalog__title">Shop The Latest</h1>
        <div className="catalog__content">
          <div className="catalog__content-inputs">
            <img className="catalog__icon" src={IconSearch} alt="IconSearch" />
            <Input placeholder="Search..." sx={{ padding: '10px 0', marginBottom: '40px' }} />
            <Select>
              <MenuItem value={10}>Shop By</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select sx={{ marginTop: '15px' }}>
              <MenuItem value={10}>Sort By</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <div className="catalog__switch">
              <h2 className="catalog__switch-h2">On sale</h2>
              <Switch />
            </div>
            <div className="catalog__switch">
              <h2 className="catalog__switch-h2">On stock</h2>
              <Switch />
            </div>
          </div>
          <div className="catalog__content-items">
            {posts.map((post) => (
              <ItemForCatalog key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
