import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface ApiType {
    title: string;
    urlToImage: string;
    author: string;
    description: string;
    publishedAt: string;
}

const DetailView = () => {    
    let [news, setNews] = useState<ApiType[]>([])
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-02-07&sortBy=publishedAt&apiKey=a1fe683889f04784afac206b96ce54fa`)
            .then((res) => {
                setNews(res.data.articles);
                console.log(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
  return (
    <div>DetailView</div>
  )
}

export default DetailView