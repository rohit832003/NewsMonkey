

import './App.css';
import LoadingBar from 'react-top-loading-bar'


import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,Route,Routes,} from 'react-router-dom';


const  App =()=> {
  
  const[progress,SetPprogress]= useState(15);
  const setProgress=(progress)=>{
    SetPprogress(progress);
  };
  // setProgress=(progress)=>{
  //   this.setState({progress:progress})

  // }
    
    
    return (
      <div style={{backgroundColor:"deepskyblue"}}>
      
       
       <BrowserRouter>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
        
      />
       <Routes>
       <Route   exact path="/" element={<News setProgress={setProgress} key="general" pagesize={15}  country="in" category ="general"/>}></Route>
    
       <Route  exact path="/bussiness" element={<News setProgress={setProgress}  key="bussiness" pagesize={15}  country="in" category ="bussiness"/>}></Route>
      
       <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={15}  country="in" category ="sports"/>}></Route>
       <Route  exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={6}  country="in" category ="entertainment"/>}></Route>
       <Route  exact path="/health" element={<News setProgress={setProgress} key="health" pagesize={6}  country="in" category ="health"/>}></Route>
       <Route exact path="/science" element={<News setProgress={setProgress} key="science" pagesize={6}  country="in" category ="science"/>}></Route>
       
       </Routes>
       
       
       
       </BrowserRouter>
       
        
      </div>
     
     
    )
  
}
export default App
