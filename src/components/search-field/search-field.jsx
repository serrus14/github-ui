import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import "./search-field.css";

export const SearchField = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(e.target.search.value.trim());
  };

  return (
    <form className="form-field__wrapper" onSubmit={handleSubmit}>
      <img className="form-field__icon" src={searchIcon} alt="search" />
      <input
        className="form-field__input"
        type="text"
        name="search"
        placeholder={props.placeholder}
        autoComplete={props.autoComplete || "off"}
      />
    </form>
  );
};
