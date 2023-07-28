import React from "react";

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card my-2">
          <div style = {{
            display: 'flex',
            justifyContent: 'flex-end',
            right: '0',
            position: 'absolute'
          }} >
          <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
         
          <img src= {imageUrl?imageUrl:"https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?w=740&t=st=1690453205~exp=1690453805~hmac=a1b6e1466978f2d82a67fb6a0a7fdcbf9d1a2c6d99dfaacc387691a3d1b4195a"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"></small>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
            <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
