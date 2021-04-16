import React, { useContext, useEffect } from "react";
import BreadcrumbComponent from "../components/breadcrumb/breadcrumb.component";
import ItemSearchComponent from "../components/item-search/item-search.component";
import ItemContext from "../context/items.context";
import HomeTamplate from "../templates/home.template";
import "./item-search.page.scss";
import {
    useLocation
  } from "react-router-dom";

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

const ItemSearchPage = () => {
  const {
    items: { filters }, getSearchByName, lookupValue
  } = useContext(ItemContext);
  const item = useQuery();
  const execSearch = async () => {
    await getSearchByName(item.get('search'));
  };
  useEffect(() => {
      (async() => await execSearch())()
  } , [])
  return (
    <HomeTamplate>
      <section className="breadcrumb-page">
        {filters && filters.length ? (
          <BreadcrumbComponent path={filters[0].values}></BreadcrumbComponent>
        ) : (
          ""
        )}
      </section>
      <section className="item-search-component">
        <ItemSearchComponent></ItemSearchComponent>
      </section>
    </HomeTamplate>
  );
};

export default ItemSearchPage;
