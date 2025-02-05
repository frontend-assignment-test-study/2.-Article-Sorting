import "h8k-components";
import { useState, useEffect } from "react";
import Articles from "./components/Articles";

import "./App.css";

function App({ articles }) {
  articles.sort((first, second) => second.upvotes - first.upvotes);
  const [articleArray, setArticleArray] = useState(articles);
  const handleMostUpvoted = () => {
    //let tempArray = articleArray
    /**
     * 레퍼런스를 복사하는 코드 -> [...articleArray]로 값을 복사하기!!
     */
    setArticleArray(
      [...articleArray].sort((first, second) => second.upvotes - first.upvotes)
    );
  };

  const handleMostRecent = () => {
    setArticleArray(
      [...articleArray].sort(
        (first, second) => new Date(second.date) - new Date(first.date)
      )
    );
  };
  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={articleArray} />
      </div>
    </>
  );
}

export default App;
