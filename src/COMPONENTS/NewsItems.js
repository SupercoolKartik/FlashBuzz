import React from "react";

export default function NewsItems(props) {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={
            props.article.urlToImage
              ? props.article.urlToImage
              : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
          }
          alt="Card img cap"
        />
        <span
          className="badge badge-danger position-absolute top-0 start-100 translate-middle rounded-pill"
          style={{ top: -6, right: -1, zIndex: 2, borderRadius: "10px" }}
        >
          {props.article.source.name}
        </span>
        <div className="card-body">
          <h5 className="card-title">{props.article.title}</h5>
          <p className="card-text">{props.article.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {props.article.author ? "By" + props.article.author : ""} On{" "}
              {new Date(props.article.publishedAt).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={props.article.url}
            target="blank"
            className="btn btn-sm btn-primary"
          >
            Check out the full news!
          </a>
        </div>
      </div>
    </>
  );
}
