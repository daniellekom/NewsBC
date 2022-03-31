import { useState} from "react"
import {useFetch} from "../hooks/useFetch"
import image from "../img/newsimg1.png"

//styles
import "./NewsList.css"

export default function NewsList() {
  const [url, setUrl] =useState("http://localhost:3000/news")
  const {data: news, isPending, error} = useFetch(url, {type:"GET"})


   
  return (
    <div className="news-list">
        <h2>ALL THE LATEST NEWS</h2>
        {isPending && <div> Loading News... </div>}
        {error && <div>{error}</div>}
        <container className="news-list-container">
            <ul>
                {news && news.map(news =>(    
                <li key={news.id}> 
                <img src={image} alt="img" className="article-image"/>
                <h3>{news.title}</h3>
                <h3>{news.article}</h3>
                <h3>{news.by}</h3>
                
                </li>   
                
                ) )}
            </ul>
        </container>

        
    </div>
  )
}
