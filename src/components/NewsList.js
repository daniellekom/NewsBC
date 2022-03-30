import { useState} from "react"
import {useFetch} from "../hooks/useFetch"

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
        <ul>
            {news && news.map(news =>(
             <li key={news.id}> 
             <h3>{news.title}</h3>
             <h3>{news.article}</h3>
             <h3>{news.by}</h3>
             
             </li>   
            ) )}
        </ul>
    </div>
  )
}
