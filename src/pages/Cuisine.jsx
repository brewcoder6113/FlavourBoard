import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useParams,Link } from 'react-router-dom';
const Cuisine = () => {
  const [cuisine,setCuisine]=useState([]);
  let params=useParams();
  const key = "7f591a9249dc400eb81eb6835a2856c0";
  const getCuisine=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${name}`);
    const recipes=await data.json();
    setCuisine(recipes.results);
  };
  useEffect(()=>{
   getCuisine(params.type)
  console.log(params.type);
  },[params.type]);
  return <Grid
       animate={{opacity:1}}
       initial={{opacity:0}}
       exit={{opacity:0}}
       transition={{duration:0.5}}
       >
      {cuisine.map((item) => {
      return(
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
           <img src={item.image} alt={item.title} />
           <h4>{item.title}</h4>  
           </Link>
        </Card>
      )
      })}
    </Grid>
}
const Grid=styled(motion.div)`
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
  text-decoration: none;
  color: black;
  font-size:20px;
  font-family:times new roman;
}
`;
export default Cuisine;