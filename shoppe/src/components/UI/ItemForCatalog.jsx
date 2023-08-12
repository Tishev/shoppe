import React, { useState } from 'react';
import '../Catalog/catalog.scss';
import { Link } from 'react-router-dom';
const ItemForCatalog = (props) => {
  return (
    <Link to="/shopItem">
      <div className="main__item-catalog ">
        <img src={props.post.img} alt={props.post.name} className="catalog__img " />
        <h2 className="main__item-name">{props.post.name}</h2>
        <p className="main__item-price">{props.post.price}</p>
      </div>
    </Link>
  );
};

export default ItemForCatalog;
