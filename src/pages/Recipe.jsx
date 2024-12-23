import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import './Styles/recipe.css';
import React from 'react'
const Recipe = () => {
    let params=useParams();
    const [details,setDetails]=useState({});
    const [activeTab,setActiveTab]=useState("instructions");
    const key = "7f591a9249dc400eb81eb6835a2856c0";
    const fetchDetails= async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
        const detailData=await data.json();
        setDetails(detailData); 
        console.log(detailData)
    }
    useEffect(()=>{
        fetchDetails();
    },[params.name]);
  return (
    <div className="DetailWrapper">
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <div className="Info">
            <button className={`Button ${activeTab==='instructions'?'active':''}`}
            onClick={()=>setActiveTab('instructions')}>Instructions</button>
            <button className={`Button ${activeTab==='ingredients'?'active':''}`} 
            onClick={()=>setActiveTab('ingredients')}>Ingredients</button>
            {activeTab==='instructions' && (
            <div>
               <h3 style={{ fontSize: '18px', fontFamily: 'times new roman' }} dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
           </div>
            )}
            {activeTab==='ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient)=>
                   <li style={{ fontSize: '18px', fontFamily: 'times new roman' }} key={ingredient.id}>{ingredient.original}</li>   
                )}
            </ul>
            )}
            
        </div>
    </div>
  )
}
export default Recipe;