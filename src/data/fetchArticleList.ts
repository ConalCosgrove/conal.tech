import { CardObject } from '../components/OptionCard';

export default async function fetchArticleList(): Promise<CardObject[]> {
  const articles = await fetch(`${process.env.REACT_APP_API_URL}/articles`);
  const data = await articles.json();
  return data;
}