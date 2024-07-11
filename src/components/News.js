import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {

  
  const capitalizeFirstLetter=(string)=>{
       return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const[articles,setArticles]= useState([]);
  const[loading,setLoading]= useState(true);
  const[totalresult,setTotalresult]= useState(0);
  const[page,setPage]= useState(1);

    //document.title=`${capitalizeFirstLetter(props.category)}-News-Monkey`;
  
   const updateNews = async()=>
  {
    props.setProgress(10);
    setLoading(true);
    let data =  await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3769c9640b664a7e826634b952a90754&page=${page}&pagesize=${props.pagesize}`);
    
    
    let parseddata= await data.json();
    console.log("prev");
    
     
     setArticles(parseddata.articles);
     setLoading(false);
     setTotalresult(parseddata.totalresult);



     props.setProgress(100);
  }
  useEffect(()=>
  {
    updateNews();
  },[])
  
  // handleprev=async ()=>{
  //   this.setState({
       
  //     page:this.state.page -1});
  //     this.updateNews();

  // }
  // handlenext=async()=>{
  //   this.setState({
       
  //     page:this.state.page +1});
  //     this.updateNews(); 
  // }
  const fetchMoreData = async() => {
    
   
    let data =  await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3769c9640b664a7e826634b952a90754&page=${page+1}&pagesize=${props.pagesize}`);
    setPage(page+1);
    
    let parseddata= await data.json();
    console.log("prev");
  
     
     setArticles(articles.concat(parseddata.articles));
    
     setTotalresult(parseddata.totalresult);
     
  };
    return (
      <>
        <h2 className="text-center" style={{marginTop:'56px',padding:"6px"}}>News-Monkey Top-headlines from :{capitalizeFirstLetter(props.category)} </h2>
         {loading && <Spinner/>} 
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalresult}
          loader={loading && <Spinner/>}
        >
          <div className="container">
        <div className="row">
          
        {articles.map((element)=>{
            return <div className=" mx-3 col-md-3" style={{boxSizing:"unset"}} key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,40):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
            
        })}
         </div>
         </div>
        </InfiniteScroll>
          
          
        </>
    );
    
  
}



News.defaultProps={
  country:'in',
  pagesize: 2

}

News.PropType={
  country: PropTypes.string,
  pagesize : PropTypes.number,
  category: PropTypes.string
}

export default News;
