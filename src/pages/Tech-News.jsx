import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./TechNews.css"


function Home() {
const [news, setNews] = useState([])
const [loading, setloading] = useState(true)


const fetchnews = async()=>{
const response = await fetch('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=c1f5ee1b3c6243e68cf3e091245df259')
const news = await response.json()
console.log(news)
setNews([news])
setloading(false)
}

useEffect(()=>{
    fetchnews()
}, [setNews])


  return loading? <h2>loading...</h2>: (
    <div>
    { news.map(( data, key)=>{
        return(
          <div key={key} className="main-div">
            {data.articles.map((c, w)=>{
                return(
                    <div key={w} className="News-div" >
                      <h1>   {c.title}</h1>
                      <i id='i'>   {c.publishedAt}</i>
                      <div className='new-image'>  <img src={c.urlToImage} alt="HAPPENING NEWS AROUND THE WORLD"/></div>
                       <p id='i'> published by {c.author} </p>
                       <p> {c.content} </p>
                       <p> {c.description} </p>
                       <a href={c.url} id="directory" > Read-more</a> 
                    </div>
                )
            })}
          
          </div>
        )
     
    })}
    </div>
  )
}

export default Home