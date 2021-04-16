import React, { useContext, useState } from "react";
import "./item-description.component.scss";
const ItemDescriptionComponent = ({
  imgSrc,
  titlePrice,
  price,
  description,
  condition,
  soldQuantity,
}) => {
  return (
    <section className="item-description">
      <img src={imgSrc} className="item-description__img" />
      <div className="price-container">
        <span className="price-container__label">
          <LabelPriceComponent
            condition={condition}
            soldQuantity={soldQuantity}
          ></LabelPriceComponent>
        </span>
        <span className="price-container__title">{titlePrice}</span>
        <span className="price-container__price">{price}</span>
        <button type="button" className="price-container__button">
          Comprar
        </button>
      </div>
      <div className="description-container">
        <span className="description-container__title">
          Descripcion del producto
        </span>
        <p className="description-container__description">{description}</p>
      </div>
    </section>
  );
};

const LabelPriceComponent = ({ condition, soldQuantity }) => {
  return (
    <>
      {condition === "new" ? "Nuevo - " : "Usado - "}
      {soldQuantity} vendidos
    </>
  );
};

export default ItemDescriptionComponent;
