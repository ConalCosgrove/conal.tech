import config from '../config';
import { CardObject } from '../components/OptionCard';
const {api} = config;

export default async function fetchArticleList(): Promise<CardObject[]> {
  console.log(api)
  const articles = await fetch(`${api}/articles`);
  console.log(articles)
  const data = await articles.json();
  return data;
}