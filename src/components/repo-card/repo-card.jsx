import React from "react";
import "./repo-card.css";

export const RepoCard = ({ repo }) => (
  <div className="repo-card">
    <a className="repo-card__title" href={repo.html_url} target="_blank">
      {repo.name}
    </a>
    <span>{repo.description}</span>
  </div>
);
