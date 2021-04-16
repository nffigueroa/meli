import React from "react";
import "./breadcrumb.component.scss";
const BreadcrumbComponent = ({path}) => {
  return (
    <section className="breadcrumb">
      {path.map(({name}, index) => <span> {name} {path.length > 1 && index < path.length - 1 ? " > " : ''}</span>)}
    </section>
  );
};

export default BreadcrumbComponent;
