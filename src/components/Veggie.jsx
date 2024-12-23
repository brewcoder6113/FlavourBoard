import React from 'react';
import { useEffect,useState } from 'react';
import './Styles/veggie.css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
const Veggie = () => {
    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getVeggie();
    }, []);
    const getVeggie = async () => {
        const key = "7f591a9249dc400eb81eb6835a2856c0";
        const check=localStorage.getItem('veggie');
        if(check)
        {
            setVeggie(JSON.parse(check));
        }
        else
        {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9&tags=vegetarian`);
            const data = await api.json()
            localStorage.setItem('veggie',JSON.stringify(data.recipes));
            console.log(data);
            setVeggie(data.recipes)
        }
        
    }
  return (
    <div>
        <div className='Wrapper'>
                <h3>Vegetarian picks</h3>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap:'5rem'
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className='Card'>
                                    <Link to={`/recipe/${recipe.id}`}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <div className='Gradient'/>
                                    </Link>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
    </div>
  )
}
export default Veggie;