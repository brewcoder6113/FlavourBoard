import React from "react";
import Pages from "./pages/Pages"
import Category from "./components/Category";
import Search from "./components/Search";
import { Link,BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import './index.css'
const App=()=>{
    return(
        <Router>
            <Nav>
                <GiKnifeFork/>
                <Logo to={"/"}>Delicious</Logo>
            </Nav>
            <Search/>
            <Category/>
            <Pages/>
        </Router>
    )
}
const Logo=styled(Link)`
text-decoration:none;
font size:1.5rem;
font-weight:400;
font-family:'Lobster Two',cursive;
`;
const Nav=styled.div`
padding:4rem 0rem;
display:flex;
// justify-content:center;
align-items:center;
svg{
    font-size:2rem;
}
`;

export default App;