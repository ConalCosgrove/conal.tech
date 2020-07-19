import config from '../config';
import { CardObject } from '../components/OptionCard';
const {api} = config;

export default async function fetchArticleList(): Promise<CardObject[]> {
  const articles = await fetch(`${process.env.REACT_APP_}/articles`);
  const data = await articles.json();
  return data;
}