import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  let count = 1;
  const fetchData = async () => {
    try {
      document.title = `${
        props.category.charAt(0).toUpperCase() + props.category.slice(1)
      } - FlashBuzz`;
      console.log(document.title);
      setArticles([]);
      setPage(1);
      console.log("fetchData is being called");
      props.setProgress(20);

      setLoading(true);

      props.setProgress(50);
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
      props.setProgress(70);

      const response = await fetch(
        `${apiUrl}&apiKey=${props.myApiKey}&page=${page}&pageSize=${props.pageSize}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const parsedData = await response.json();

      console.log("Search Results", parsedData.totalResults);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error state or display a message to the user
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [props.category]);

  const fetchMoreData = async () => {
    try {
      props.setProgress(50);
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
      const response = await fetch(
        `${apiUrl}&apiKey=${props.myApiKey}&page=${page + 1}&pageSize=${
          props.pageSize
        }`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch more data: ${response.statusText}`);
      }

      setPage(page + 1);
      console.log("fetchMoreData is being called", page);
      const parsedData = await response.json();
      props.setProgress(100);

      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more data:", error);
      // Handle error state or display a message to the user
    }
  };

  return (
    <div className="container">
      <h2 className=" mb-4" style={{ marginTop: "95px" }}>
        FlashBuzz <br />(
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)})
      </h2>
      {loading && <Spinner />}
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
                <NewsItem article={article} pageNo={page} count={count++} />
              </div>
            ))}
          </div>
        }
        {/* //-------------------------------- */}
      </InfiniteScroll>
    </div>
  );
}
