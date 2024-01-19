import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./spinner.js";

//After (npm install react-infinite-scroll-component)
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async () => {
    console.log("fetchData is being called");
    props.setProgress(20);

    setLoading(true);

    props.setProgress(50);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
    props.setProgress(70);
    try {
      const response = await fetch(
        `${apiUrl}&apiKey=${props.myApiKey}&page=1&pageSize=${props.pageSize}`
      );
      const parsedData = await response.json();
      props.setProgress(100);
      console.log("Search Results", parsedData.totalResults);

      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setPage(2);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [props.category]);

  const fetchMoreData = async () => {
    console.log("fetchMoreData is being called", page);

    setPage(page + 1);
    props.setProgress(50);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
    const response = await fetch(
      `${apiUrl}&apiKey=${props.myApiKey}&page=${page}&pageSize=${props.pageSize}`
    );
    const parsedData = await response.json();
    props.setProgress(100);

    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <div className="container">
      {loading && <Spinner />}
      <h2 className="mt-4 mb-4">
        FlashBuzz <br />(
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)})
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {/* //-------------------------------- */}
        {
          <div className="row my-2 mx-3">
            {articles.map((article, index) => (
              <div key={index} className="col-md-4 my-2">
                <NewsItem article={article} pageNo={page} />
              </div>
            ))}
          </div>
        }
        {/* //-------------------------------- */}
      </InfiniteScroll>
    </div>
  );
}
