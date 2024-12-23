import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Searched = () => {
  const [searched,setSearched]=useState([]);
  let params=useParams();
  const key = "84227dccb0bf4c4cb3da96a33ede0a1e";
  const getSearched=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}`);
    const recipes=await data.json();
    setSearched(recipes.results);
  };
  useEffect(()=>{
   getSearched(params.search);
  },[params.search]);
  return (
    <Grid>
     {
      searched.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              </Link>
          </Card>
        )
      })
     }  
    </Grid>
  )
}
const Grid=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
`;
const Card=styled.div`
width:300px;
height:300px;
img{
  border-radius:2rem;
}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}
`;

export default Searched;