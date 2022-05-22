import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { GitHubApi } from "../../api/GithubApi";
import { RepoCard } from "../repo-card/repo-card";
import { Loader } from "../loader/loader";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import "./repos-list.css";

export const ReposList = ({ user }) => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const perPage = 4;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const ghPerPage = 100;
      const ghPageCount = Math.ceil(user.public_repos / ghPerPage);
      const pages = Array.from({ length: ghPageCount }, (_, i) => i + 1);
      let repos = [];

      for (const page of pages) {
        const data = await GitHubApi.getReposByLogin(user.login, page);
        repos = [...repos, ...(await data.json())];
      }

      setItems(repos);
      setIsLoading(false);
    })();
  }, [user]);

  useEffect(() => {
    if (items.length !== user.public_repos) return;
    const endOffset = itemOffset + perPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / perPage));
  }, [items.length, itemOffset, perPage, user]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {!isLoading && (
        <div className="repos-list">
          <div>
            <h2 className="repos-list__title">Repositories ({user.public_repos})</h2>
            <div className="repos-list__items">
              {currentItems && currentItems.map((ci) => <RepoCard repo={ci} key={ci.id} />)}
            </div>
          </div>
          <div className="repos-list__paginate-wrapper">
            <span>
              {itemOffset + 1}-{itemOffset + 4} of {user.public_repos} items
            </span>
            <ReactPaginate
              breakLabel="..."
              nextLabel={<img src={arrowRightIcon} />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel={<img src={arrowLeftIcon} />}
              renderOnZeroPageCount={null}
              className="repos-list__paginate"
              activeClassName="repos-list__active-page"
              activeLinkClassName="repos-list__active-page-link"
            />
          </div>
        </div>
      )}
      {isLoading && <Loader fullScreen />}
    </>
  );
};
