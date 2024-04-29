import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsArea = ({Category}) => {
    const [article,setarticle]=useState([]);
    useEffect(()=>{
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${Category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setarticle(data.articles));
    },[Category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='text-danger'>News</span></h2>
      {article.map((news,index)=>{
        return <NewsItem key={index} title={news.title} desc={news.description} url={news.url} src={news.urlToImage} />
      })}

    </div>
  )
}

export default NewsArea
