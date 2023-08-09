import React from 'react';

const Item = (props) => {
  return (
    <div className="main__item">
      <img src={props.post.img} alt={props.post.name} className="main__item-img" />
      <h2 className="main__item-name">{props.post.name}</h2>
      <p className="main__item-price">{props.post.price}</p>
    </div>
  );
};

export default Item;
