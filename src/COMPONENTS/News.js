import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./spinner.js";

//After (npm install react-infinite-scroll-component)
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  let count = 1;
  const [newsData, setNewsData] = useState({
    articles: [],
    page: 1,
    loading: false,
    totalResults: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData is being called");

      setNewsData((prevData) => ({
        ...prevData,
        loading: true,
      }));
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;

      try {
        const response = await fetch(
          `${apiUrl}&apiKey=${props.myApiKey}&page=1&pageSize=${props.pageSize}`
        );
        const data = await response.json();
        console.log("Search Results", data.totalResults);

        if (data.articles) {
          setNewsData((prevData) => ({
            articles: data.articles,
            page: 2,
            totalResults: data.totalResults,
            loading: false,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.pageSize, props.category, props.myApiKey]);

  const fetchMoreData = async () => {
    console.log("fetchMoreData is being called", newsData.page);

    setNewsData((prevData) => ({
      ...prevData,
      page: newsData.page + 1,
    }));

    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
    const response = await fetch(
      `${apiUrl}&apiKey=${props.myApiKey}&page=${newsData.page}&pageSize=${props.pageSize}`
    );
    const data = await response.json();

    setNewsData((prevData) => ({
      ...prevData,
      articles: newsData.articles.concat(data.articles),
    }));
  };

  return (
    <div className="container">
      {newsData.loading && <Spinner />}
      <h2 className="mt-4 mb-4">
        FlashBuzz <br />(
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)})
      </h2>

      <InfiniteScroll
        dataLength={newsData.articles.length}
        next={fetchMoreData}
        hasMore={newsData.articles.length !== newsData.totalResults}
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
            {newsData.articles.map((article, index) => (
              <div key={index} className="col-md-4 my-2">
                <NewsItem
                  article={article}
                  pageNo={newsData.page}
                  count={count++}
                />
              </div>
            ))}
          </div>
        }
        {/* //-------------------------------- */}
      </InfiniteScroll>
    </div>
  );
}
