import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNewsArticles, getHeadlines } from "./api.js";

function Headline(props) {
  return (
    <div className="Headline">
      <li>{props.title}</li>
    </div>
  );
}

export default function App() {
  /*
  const headlines = [ 
    'My First Title',
    'My Second Title',
    'My Third Title',
    'My Fourth Title',
  ];
  */
  /*
  const headlines = [
    { title: 'My First Title', url: 'https://news.com/first-title' },
    { title: 'My Second Title', url: 'https://news.com/second-title' },
    { title: 'My Third Title', url: 'https://news.com/third-title' },
    { title: 'My Fourth Title', url: 'https://news.com/fourth-title' },
  ];
  */

  const { loading, headlines, error } = useNewsArticles();
  /*
  if(loading){
    return <p>Loading...</p>;
  }
*/

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        headlines.map(headline => (
          //        <Headline title={healine} />
          <Headline key={headline.url} title={headline.title} />
        ))
      )}
      <getHeadlines />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
