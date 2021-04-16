import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import BreadcrumbComponent from "../components/breadcrumb/breadcrumb.component";
import ItemDescriptionComponent from "../components/item-description/item-description.component";
import ItemContext from "../context/items.context";
import { doSearchById, doSearchCategoryById } from "../services/search";
import HomeTamplate from "../templates/home.template";
import "./items-detail.page.scss";

const ItemDetailPage = () => {
  const { id } = useParams();
  const { getItemDescription, itemDescription, items } = useContext(
    ItemContext
  );
  const [item, setItem] = useState();
  const [category, setCategory] = useState({});
  useEffect(() => {
    (async () => await getItemDescription(id))();
    (async () => {
        const { data } = await doSearchById(id);
        const { data : { name} } = await doSearchCategoryById(data.category_id);
        setItem(data);
        setCategory({name});
    })();
  }, []);
  return (
    <HomeTamplate>
      <section className="breadcrumb-page">
        {items && items.filters && items.filters.length ? (
          <BreadcrumbComponent
            path={[...items.filters[0].values, category]}
          ></BreadcrumbComponent>
        ) : (
          ""
        )}
      </section>
      <section className="items-detail-component ">
        {item && itemDescription ? (
          <ItemDescriptionComponent
            imgSrc={item.thumbnail}
            titlePrice={item.title}
            price={`$ ${new Intl.NumberFormat().format(item.price)}`}
            description={itemDescription.plain_text}
            condiition={item.condition}
            soldQuantity={item.sold_quantity}
          ></ItemDescriptionComponent>
        ) : (
          ""
        )}
      </section>
    </HomeTamplate>
  );
};

export default ItemDetailPage;
