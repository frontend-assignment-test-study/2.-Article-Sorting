import {useState} from "react";
import Articles from "./Articles";
function App({articles}) {
    const [mostUpvoted, setMostUpvoted] = useState([...articles].slice());

    const handleMostUpvote = () => {
        const most = [...mostUpvoted].slice().sort((a,b) => b.upvotes - a.upvotes);
        setMostUpvoted(most);
    }

    const handleMostRecent = () => {
        const recent = [...mostUpvoted].slice().sort((a,b) => new Date(b.date) - new Date(a.date));
        setMostUpvoted(recent);
    }

    return(
        <>
        <h8k-navbar header="Sorting Articles"></h8k-navbar>
        <div className="App">
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">
                    Sort By
                </label>
                <button
                data-testid="most-upvoted-link"
                className="samll"
                onClick={handleMostUpvote}
                >
                    Most Upvoted
                </button>

                <button
                data-testid="most-recnet-link"
                className="samll"
                onClick={handleMostRecent}
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={mostUpvoted}/>
        </div>
        </>
    )
}