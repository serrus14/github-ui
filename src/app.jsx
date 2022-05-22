import React, { useEffect, useState } from "react";
import { FullscreenMessage } from "./components/fullscreen-message/fullscreen-message";
import { Header } from "./components/header/header";
import { GitHubApi } from "./api/GithubApi";
import { UserContainer } from "./components/user-container/user-container";
import searchIcon from "./assets/icons/search.svg";
import userIcon from "./assets/icons/user.svg";
import { Loader } from "./components/loader/loader";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [isNotFound, setIsNotFound] = useState();
  const [isLoading, setIsLoading] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      if (!searchTerm) return;
      setIsLoading(true);
      const data = await GitHubApi.getUserByLogin(searchTerm);
      if (!data.ok) {
        setUser(null);
        setIsLoading(false);
        return setIsNotFound(true);
      }
      const user = await data.json();
      setUser(user);
      setIsNotFound(false);
      setIsLoading(false);
    })();
  }, [searchTerm]);

  return (
    <div className="app">
      <Header onSearch={(e) => setSearchTerm(e)} />
      <main className="content">
        {!isLoading && !searchTerm && (
          <FullscreenMessage
            icon={<img src={searchIcon} width={80} height={80} />}
            message="Start with searching a GitHub user"
          />
        )}
        {!isLoading && isNotFound && (
          <FullscreenMessage icon={<img src={userIcon} width={100} height={100} />} message="User not found" />
        )}
        {isLoading && <Loader fullScreen />}
        {!isLoading && user && <UserContainer user={user} />}
      </main>
    </div>
  );
}

export default App;
