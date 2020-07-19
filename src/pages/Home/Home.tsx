import React, { useEffect, useState } from 'react';
import CardGrid from '../../components/CardGrid';
import {CardObject} from '../../components/OptionCard';
import fetchArticleList from '../../data/fetchArticleList';



export default function Home()  {
  const initialState: CardObject[] = [];
  const [articles, updateArticles] = useState(initialState);
  useEffect(() => {
    fetchArticleList().then(updateArticles)
  }, [])
  
  return (<div> 
    {articles.length ? 
    <CardGrid cards={articles}/>:
    <h1>Loading Articles</h1>
    }
  </div>
  )
}