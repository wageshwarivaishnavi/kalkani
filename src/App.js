import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import BoxCard from "./components/card";
import axios from "axios";
import Pagination from "./components/pagination";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const getUrl = () => {
    if (searchQuery !== "") {
      return `https://api.jikan.moe/v4/characters?page=${pageNumber}&limit=15&q=${searchQuery}`;
    } else {
      return `https://api.jikan.moe/v4/characters?page=${pageNumber}&limit=15`;
    }
  };
  useEffect(() => {
    axios.get(getUrl()).then((data) => {
      console.log(data);
      setAnimeData(data.data.data);
      setCount(data?.data?.pagination?.items?.total);
    });
  });

  const handlePageChange = (page) => {
    console.log("Hello");
  };

  const onBack = () => {
    if (pageNumber === 1) {
      return;
    } else {
      setPageNumber(pageNumber - 1);
    }
  };
  const onNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="App">
      <div className="animeBg">
        <NavBar />
        <div className="search-div">
          <SearchBox searchQuery={searchQuery} handleChange={setSearchQuery} />
          <p className="animeCount">
            <b>Total {count} matching anime characters found</b>
          </p>
        </div>
      </div>
      {animeData.length > 0 ? (
        <div className="anime-data">
          {animeData.map((anime) => (
            <BoxCard
              avImage={anime?.images?.jpg?.image_url}
              avName={anime?.name}
              likes={anime?.favorites}
              nickName={anime?.nicknames}
              url={anime?.url}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No results found!</p>
        </div>
      )}
      {animeData && animeData.length > 0 && (
        <div className="pagination-div">
          <Pagination
            onBack={onBack}
            onNext={onNext}
            itemsCount={animeData.length}
            pageSize={15}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default App;
