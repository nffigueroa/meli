import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import ItemContext from "../../context/items.context";
import ItemArticleComponent from "../item-article/item-article.component";
import "./item-search.component.scss";
const ItemSearchComponent = () => {
  const itemContext = useContext(ItemContext);
  const [itemsToShow, setItemsToShow] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const { results } = itemContext.items;
    if (results) {
      setItemsToShow(results.slice(0, 4));
    }
  }, []);
  useEffect(() => {
    const { results } = itemContext.items;
    if (results) {
      setItemsToShow(results.slice(0, 4));
    }
  }, [itemContext.items]);
  const hanldeClick = async (id = '') => {
    history.push(`/items/${id}`);
} 
  return (
    <section className="item-search-result">
      {itemsToShow
        ? itemsToShow.map(
            ({ thumbnail, price, title, id, address: { state_name }, shipping: {free_shipping} }) => (
              <ItemArticleComponent
                imgSrc={thumbnail}
                price={`$ ${new Intl.NumberFormat().format(price)}`}
                description={title}
                location={state_name}
                id={id}
                onClickFunc={hanldeClick}
                freeShipping={free_shipping}
              />
            )
          )
        : ""}
    </section>
  );
};

export default ItemSearchComponent;
