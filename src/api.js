import React, { useState, useEffect } from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";

const API_KEY = "4972141e1e464d8fb58d2b88b8b5359f";

export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  /*
  useEffect(
    () =>{
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    },
    [],
  );
  */
  useEffect(() => {
    getHeadlines()
      .then(headlines => {
        setHeadlines(headlines);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  });

  /*
  const headlines = [
    { title: "My First Title", url: "https://news.com/first-title" },
    { title: "My Second Title", url: "https://news.com/second-title" },
    { title: "My Third Title", url: "https://news.com/third-title" },
    { title: "My Fourth Title", url: "https://news.com/fourth-title" }
  ];
*/

  /*
  { loading: boolean, 
    headlines: Array<{ title: string, url: string }>, 
    error: Error | null,
  }
*/
  return {
    loading,
    headlines,
    error
  };
}

function getHeadlines() {
  const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}`;

  return (
    fetch(url)
      .then(res => res.json())
      // .then((res) => console.log(res));
      .then(res => res.articles)
      .then(articles =>
        articles.map(article => ({
          title: article.title,
          url: article.url
        }))
      )
  );
}
/*
function setHeadlines() {

  return(
    var headlines = [];
    headlines = getHeadlines();
 // var headlines = [];
  ///for (headline in headlines){
    //headlines.push(headline);
  //};
  //return headlines;
}
*/
