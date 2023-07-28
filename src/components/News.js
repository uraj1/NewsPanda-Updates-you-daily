import React ,{useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)

  
    
const capital = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
if(props.category === 'general'){
  document.title = `NewsPanda - Updates you daily`
}else{
  document.title = `${capital(props.category) + " -NewsPanda"}`
}

const updateNews = async()=>{
  
  props.setProgress(10)
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5a7735a772154eab8b40f988191dce68&page=${page}&pageSize=${props.pageSize}`;

  // 3c77371e3fe44e8399673971fde7436f use this in case the api exhausts
  // c4f15376c6f445f2ad1ba36526e64138
  setLoading(true)

  let data = await fetch(url);
  props.setProgress(30)
  let response = await data.json();
  props.setProgress(50)
  setArticles(response.articles)
  setLoading(false)
  setTotalResult(response.totalResults)
 
  props.setProgress(100)
}

useEffect( ()=> {
 updateNews();
//  eslint-disable-next-line
}, [])
 
  const fetchMoreData = async() => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5a7735a772154eab8b40f988191dce68&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page + 1)

    let data = await fetch(url);
    let response = await data.json();
    setArticles(articles.concat(response.articles))
    setTotalResult(response.totalResults)
   
  };

    return (
      <>
        <h1 style = {{fontSize: '45px', marginBottom : '30px', marginTop : '80px'}} className = 'text-center' >NewsPanda -Top {capital(props.category)} Headlines</h1>
       {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 44) : ""}
                  description={element.description ? element.description.slice(0, 85) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                /> 
              </div>  
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
       
        </>
    );
  
}
News.defautProps = {
  country : "in",
  pageSize : 6,
  category : "general"
}
News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
}

export default News;
