import React from 'react'
import image from '../assets/news.jpeg'

const NewsItem = ({title,desc,url,src}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-4 my-3  px-2 py-2" style={{maxWidth:"343px"}}>
      <img src={src?src:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{desc?desc.slice(0,100):"No Description available for this news"}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem
