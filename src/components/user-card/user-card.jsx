import React from "react";
import followersIcon from "../../assets/icons/followers.svg";
import followingIcon from "../../assets/icons/following.svg";
import { kFormatter } from "../../utils/number";
import "./user-card.css";

export const UserCard = ({ user }) => (
  <div className="user-card">
    <img className="user-card__image" src={user.avatar_url} alt={`${user.login}_avatar`} />
    <p className="user-card__name">{user.name}</p>
    <a className="user-card__login" href={user.html_url} target="_blank">
      {user.login}
    </a>
    <div className="user-card__subscriptions">
      <div className="user-card__subscription">
        <img src={followersIcon} alt={`${user.login}_followers`} />
        <span>{kFormatter(user.followers)} followers</span>
      </div>
      <div className="user-card__subscription">
        <img src={followingIcon} alt={`${user.login}_following`} />
        <span>{kFormatter(user.following)} following</span>
      </div>
    </div>
  </div>
);
