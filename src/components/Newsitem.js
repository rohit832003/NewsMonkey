import React, { useState } from "react";

const newsitem=(props)=> {
   

    let { title, description, imageUrl, newsurl, author, date,source } = props;
    return (
      <div className="container my-3" >
        <div style={
        {
          display:"flex",justifyContent:"flex-end",position:"absolute",right:"0",zIndex:"1"
        }
      }>
        <span className=" badge rounded-pill bg-danger " >
          {source}
        </span>
        </div> 
        <div
          className="card "
          style={{ border: "1px solid black",width:"260px", backgroundColor: "goldenrod" }}
        >
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.dribbble.com/users/29051/screenshots/2347771/spinner.mov.gif"
            }
            style={{ height: "140px", width: "100%" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}. . .</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author?author:"unknown"} on {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-danger">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default newsitem;
