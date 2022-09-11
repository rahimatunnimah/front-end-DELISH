import React from "react";

function TitleForm(props) {
  const { title, sub } = props;
  return (
    <>
      <h1 className="title mb-2">{title}</h1>
      <p className="description mb-2">{sub}</p>
    </>
  );
}

export default TitleForm;
