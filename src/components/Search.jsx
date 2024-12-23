import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import './Styles/search.css';
const Search = () => {
    const [input, setInput] = useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input);
    };
    return (
        <>
        <div class="d-flex justify-content-center">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={submitHandler}>
                        <input className="form-control me-2" 
                        type="search" 
                        value={input} 
                        placeholder="Search" 
                        aria-label="Search" 
                        onChange={(e) => setInput(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Search;