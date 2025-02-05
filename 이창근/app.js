import "h8k-components";

import Articles from "./components/Articles";

import "./App.css";

import { useState } from 'react';

function App({ articles }) {
  const [articlesState, setArticlesState] = useState(
    [...articles].sort((a, b) => b.upvotes - a.upvotes)
  );
  const handleMostUpvoted = () => {
    setArticlesState([...articlesState].sort((a, b) => b.upvotes - a.upvotes));
  };

  const handleMostRecent = () => { 
    setArticlesState([...articles].sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  // 역순 정렬 기능
  // const [isSortedByUpvoted, setIsSortedByUpvoted] = useState(false);
  // const [isSortedByDate, setIsSortedByDate] = useState(false);

  // const handleMostUpvoted = () => {
  //   if(isSortedByUpvoted) {
  //     setArticlesState([...articlesState].sort((a, b) => a.upvotes - b.upvotes));
  //     setIsSortedByUpvoted(false);
  //     setIsSortedByDate(false);
  //   }
  //   else {
  //     setArticlesState([...articlesState].sort((a, b) => b.upvotes - a.upvotes));
  //     setIsSortedByUpvoted(true);
  //     setIsSortedByDate(false);
  //   }
  // };

  // const handleMostRecent = () => { 
  //   if(isSortedByDate) {
  //     setArticlesState([...articles].sort((a, b) => new Date(a.date) - new Date(b.date)));
  //     setIsSortedByDate(false);
  //     setIsSortedByUpvoted(false);
  //   } else {
  //     setArticlesState([...articles].sort((a, b) => new Date(b.date) - new Date(a.date)));
  //     setIsSortedByDate(true);
  //     setIsSortedByUpvoted(false);
  //   }
  // };
  
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
        <Articles articles={articlesState} />
      </div>
    </>
  );
}

export default App;
