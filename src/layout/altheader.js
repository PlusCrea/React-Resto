import React from "react";

export default function AltHeader(props) {
  const title = props.title;
  return (
    <div className="all-page-title page-breadcrumb">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
