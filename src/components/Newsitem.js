import React from 'react'



const Newsitem = (props) => {
  let { title, desc, imageurl, newsurl } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageurl ? "https://cdn5.vectorstock.com/i/1000x1000/82/99/breaking-news-logo-template-vector-20608299.jpg" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  );
}


export default Newsitem
