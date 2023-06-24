import React from 'react'

export default function NewsItem(props) {
    var {title, description, image, url} = props;
    return (
      <a href={url} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
      <div className="container">
        <div className="card" style={{width: "19rem",height: "490px",marginTop:"30px", alignContent: "space-between", alignItems: "center", justifyItems: "center", justifyContent: "center"}}>
          <div style={{width: "100%", maxHeight: "165px", height: "165px", overflow: "hidden", display: "grid", alignContent: "center", alignItems: "center", justifyItems: "center", justifyContent: "center"}}>
            <img src={image} className="card-img-top" alt=""/>
          </div>
          <div className="card-body" style={{display: "grid", alignContent: "space-between", alignItems: "center", justifyItems: "center", justifyContent: "center"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary w-50">Read More</button>
          </div>
        </div>
      </div>
      </a>
    )
}
