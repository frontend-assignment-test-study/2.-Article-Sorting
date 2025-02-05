import "h8k-components";
import React, { useState, useEffect } from "react";
import Articles from "./components/Articles";
import "./App.css";

function App({ articles }) {
  const [articleList, setArticleList] = useState(articles);

  useEffect(() => {
    //맨처음 렌더링 될 때만 실행된다
    handleMostUpvoted();
  }, []);

  const compare = (key) => {
    //비교함수의 값이 0보다 작으면 a를 우선, 0이면 정렬하지 않고, 0보다 크면 b를 우선
    return (a, b) => (a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0);
  };
  const handleMostUpvoted = () => {
    //정렬이기 때문에 얕은 복사로도 가능, 만약 객체 내부 값을 변경하는 경우라면 얕은 복사를 하고 내부 값을 변경하면 원본배열에도 변경이 생길 수 있기 때문에 조심해야된다
    let tmp = [...articleList];
    tmp.sort(compare("upvotes"));
    setArticleList(tmp);
  };

  const handleMostRecent = () => {
    let tmp = [...articleList];
    tmp.sort(compare("date"));
    setArticleList(tmp);
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
        <Articles articles={articleList} />
      </div>
    </>
  );
}

export default App;
