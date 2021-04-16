import React, { useContext } from "react";
import ItemContext from "../../context/items.context";
import "./item-article.component.scss";
import shipping from "../../assets/ic_shipping.png";
const ItemArticleComponent = ({
  imgSrc,
  price,
  description,
  location,
  id,
  onClickFunc,
  freeShipping
}) => {
  const itemContext = useContext(ItemContext);
  return (
    <article className="item-article" onClick={() => onClickFunc(id)}>
      <img src={imgSrc} className="item-article__img" />
      <section className="center">
        <span className="center__price">
          {price}
          {freeShipping ? <img className="icon" src={shipping} /> : ''}
          
        </span>
        <span className="center__description">{description}</span>
      </section>
      <span className="item-article__location">{location}</span>
    </article>
  );
};

export default ItemArticleComponent;
