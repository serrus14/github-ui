import React from "react";
import { FullscreenMessage } from "../fullscreen-message/fullscreen-message";
import { UserCard } from "../user-card/user-card";
import { ReposList } from "../repos-list/repos-list";
import noReposIcon from "../../assets/icons/no-repos.svg";
import "./user-container.css";

export const UserContainer = ({ user }) => (
  <div className="user-container">
    <UserCard user={user} />
    {!user.public_repos && <FullscreenMessage icon={<img src={noReposIcon} />} message="Repository list is empty" />}
    {!!user.public_repos && <ReposList user={user} />}
  </div>
);
