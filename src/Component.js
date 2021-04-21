import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Component.css"

const Component=()=>{
  const [data, setData]=useState([]);
  const [pageNumber, setPageNumber]=useState(0);

const usersPerPage=0;
const pagesVisited=0;
const diplayUsers= 0; 

  useEffect(()=>{
    fetch("https://api.github.com/repos/vmg/redcarpet/issues?state=open")
    .then(res=>res.json())
    .then(data=>{setData(data)
    //console.log(data)});
    usersPerPage=5;
    pagesVisited=usersPerPage*pageNumber;
  
    diplayUsers=data.slice(pagesVisited, pagesVisited+usersPerPage);
  },[])
  
  
  return (
  <>
  <div className="container">
    <h1>Github Issues</h1>
  <ol>
  {data.map((ele)=>
  <div className="issueItem">
    <li>
      <h3>{ele.title}</h3>
      
    </li>
    <div className="heading">
      <p>#{ele.number}&nbsp; opened by <strong>{ele.user.login}</strong> </p>
      
    </div>
    <a href={ele.url}><h4>Source:{ele.url}</h4></a>
    <hr/>
  </div>
  )}
  </ol>
  </div>
  </>)
}
export default Component;