import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Link to="/shopItem">
      <div className="main__item ">
        <img src={props.post.img} alt={props.post.name} className="main__item-img " />
        <h2 className="main__item-name">{props.post.name}</h2>
        <p className="main__item-price">{props.post.price}</p>
      </div>
    </Link>
  );
};

export default Item;
