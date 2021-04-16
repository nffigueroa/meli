import React, { useContext, useState } from "react";
import "./search.component.scss";
import logo from "../../assets/logo.png";
import ItemContext from "../../context/items.context";
import { useHistory } from "react-router";
const SearchComponent = () => {
  const history = useHistory();
  const itemContext = useContext(ItemContext);
  const execSearch = async () => {
    history.push(`/items?search=${itemContext.lookupValue}`);
  };
  return (
    <section className="search-bar">
      <div className="input-container">
        <img onClick={() => history.push('/')} src={logo} className="search-bar__logo" />
        <input
          value={itemContext.lookupValue}
          type="text"
          className="input-container__input"
          onKeyUp={(e) => (e.key === "Enter" ? execSearch() : "")}
          onChange={(e) => itemContext.getlookUpValue(e.target.value)}
        />
        <svg
          onClick={() => execSearch()}
          className="input-container__lookup"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </div>
    </section>
  );
};

export default SearchComponent;
