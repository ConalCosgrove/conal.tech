import React from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function Article() {
  const match = useRouteMatch();
  return (
    <h1>
      {match.url}
    </h1>
  )
}