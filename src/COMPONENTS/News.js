import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./spinner.js";

export default function News(props) {
  const [newsData, setNewsData] = useState({
    articles: [],
    page: 1,
    loading: false,
    totalResults: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setNewsData((prevData) => ({
        ...prevData, // Spread the current state
        loading: true, // Update only 'loading'
      }));
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
      // const apiKey = {props.myApiKey};

      try {
        const response = await fetch(
          `${apiUrl}&apiKey=${props.myApiKey}&page=${newsData.page}&pageSize=${props.pageSize}`
        );
        const data = await response.json();
        console.log("Search Results", data.totalResults);

        if (data.articles) {
          setNewsData((prevData) => ({
            articles: data.articles,
            page: newsData.page,
            totalResults: data.totalResults,
            loading: false,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [newsData.page, props.pageSize, props.category, props.myApiKey]);

  const pageChange = async () => {
    setNewsData((prevData) => ({
      ...prevData, // Spread the current state
      loading: true, // Update only 'loading'
    }));

    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}`;
    // const apiKey = {props.myApiKey};
    const response = await fetch(
      `${apiUrl}&apiKey=${props.myApiKey}&page=${newsData.page - 1}&pageSize=${
        props.pageSize
      }`
    );
    const data = await response.json();

    setNewsData((prevData) => ({
      ...prevData,
      articles: data.articles,
      totalResults: data.totalResults,
      loading: true,
    }));
  };
  const handlePreviousClick = async () => {
    if (newsData.page > 1) {
      console.log("Page is", newsData.page);
      console.log("Previous");

      setNewsData((prevData) => ({
        ...prevData,
        page: newsData.page - 1,
      }));
      pageChange();
    }
  };
  const handleNextClick = async () => {
    console.log("Next");
    setNewsData((prevData) => ({
      ...prevData,
      page: newsData.page + 1,
    }));
    pageChange();
  };

  return (
    <div className="container">
      {newsData.loading && <Spinner />}
      <h2 className="mt-4 mb-4">
        FlashBuzz <br />(
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)})
      </h2>
      {!newsData.loading && (
        <div className="row my-2 mx-3">
          {newsData.articles.map((article, index) => (
            <div key={index} className="col-md-4 my-2">
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      )}
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          onClick={handlePreviousClick}
          className="btn btn-dark mx-10-"
          disabled={newsData.page <= 1}
        >
          Previous
        </button>
        {newsData.page}
        <button
          type="button"
          onClick={handleNextClick}
          className="btn btn-dark mx-3"
          disabled={
            newsData.page >= Math.ceil(newsData.totalResults / props.pageSize)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
