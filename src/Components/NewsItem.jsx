import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div className="mx-2 my-2">
        <div className="card">
          <div>
            <span
              className=" badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0%",
              }}
            >
              {source}
            </span>
          </div>
          <img
            className="card-img-top"
            src={
              !imgUrl
                ? "https://static.feber.se/article_images/58/61/18/586118.jpg"
                : imgUrl
            }
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="py-1" style={{ fontSize: "13px", color: "gray" }}>
              By <span className="fw-bold">{!author ? "Unknown" : author}</span>{" "}
              on : {publishedAt}
            </p>
            <a
              href={newsUrl}
              className="btn btn-primary"
              rel="noreferrel"
              target="_blank"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
