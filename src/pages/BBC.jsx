import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./contact.css"

function Contact() {
  const[news, setNews] = useState([])
  const[loading, setloading] = useState(true)

  const retreiveNews = async()=>{
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c1f5ee1b3c6243e68cf3e091245df259')
    const news = await response.json()
    console.log(news)
    setNews([news])
    setloading(false)
  }
useEffect(()=>{
  retreiveNews()
},[setNews])


  return loading? <h2 id='loading'> loading...</h2>:(
    <div>
      {news.map(( value, key)=>{
        return(
          <div key={key} id="contact-news-div"> 
          {value.articles.map((fact, key)=>{

          return(
            <div key={key}>
            <div id='bbc-news-div' >
            <h1>{fact.title}</h1>
              <img src={fact.urlToImage} alt="BBC_NEWS" id='BBC_NEWS'/>
              <p id='i'> published on {fact.publishedAt}</p>
              <p>{fact.content}</p>
              <p>{fact.description}</p>
              <a href={fact.url} id="directory">READ-MORE </a>
            </div>
            </div>
          )

          })}
          </div>
        )
      })}
    </div>
  )
}

export default Contact