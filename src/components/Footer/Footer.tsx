import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as urls } from '../../data/static';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'steelblue',
    width: '100%',
    paddingTop:5,
    paddingBottom:5,
    position: "fixed",
    left: 0,
    bottom: 0,
    
  },
  p: {
    color: 'white'
  },
  a: {
    '& visited': {
      textDecoration: 'none',
      color: 'white'
    },

    textDecoration: 'none',
    color: 'white'
  }
});

const linkEmoji = <span role='img' aria-label='link emoji'>🔗</span>;

export default function Footer() {
  const { apiSourceCodeURL, frontendSourceCodeURL } = urls;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <p className={styles.p}> 
      {linkEmoji} <a href={frontendSourceCodeURL} className={styles.a}>Frontend written in Typescript + ReactJS</a> <br/>
      {linkEmoji}<a href={apiSourceCodeURL} className={styles.a}>API written in go.</a> <br/>
      Hosted on Heroku ☁️ <br/> 
      
      </p>
    </div>
  )
}