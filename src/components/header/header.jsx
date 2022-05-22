import React from "react";
import githubIcon from "../../assets/icons/github.svg";
import { SearchField } from "../search-field/search-field";
import "./header.css";

export const Header = (props) => {
  return (
    <header className="header">
      <img src={githubIcon} alt="logo" />
      <SearchField placeholder="Enter GitHub username" onSubmit={(searchTerm) => props.onSearch(searchTerm)} />
    </header>
  );
};
