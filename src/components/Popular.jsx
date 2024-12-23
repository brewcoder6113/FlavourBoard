import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Styles/popular.css";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
const Popular = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, []);
    const getPopular = async () => {
        const key = "7f591a9249dc400eb81eb6835a2856c0";
        const check=localStorage.getItem('popular');
        if(check)
        {
            setPopular(JSON.parse(check));
        }
        else
        {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`);
            const data = await api.json()
            localStorage.setItem('popular',JSON.stringify(data.recipes));
            console.log(data);
            setPopular(data.recipes)
        }
        
    }
    return (
        <div className='wrapper'>
                <h3>Popular picks</h3>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap:'5rem'
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className='card'>
                                    <Link to={`/recipe/${recipe.id}`}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <div className='gradient'/>
                                    </Link>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
        </div>
    );
};
export default Popular;