import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./About.css"

function About() {
  const [ news, setNews] = useState([])
  const [loading, setloading] = useState(true)

  const getnews = async() =>{
    const response = await fetch('https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=c1f5ee1b3c6243e68cf3e091245df259')
    const news = await response.json()
    console.log(news)
    setNews([news])
    setloading(false)
  }

  useEffect(()=>{
    getnews()
  },[setNews])
  return loading? <h2> Fetching News please wait...</h2> :(
    <div>
      {news.map((info, key)=>{
        return(
          <div key={key} id="full-container">
             <h1 id='headline'>USA HEADLINES</h1>
          <div id='try'>{info.sources.map((news, key)=>{
            return(
              <div key={key} id="news-container">
                <a href={news.url} id="news-link">{news.description}</a>
              </div>
              
            )
          })}</div>
          </div>
        
        )
      })}
    </div>
  )
}

export default About