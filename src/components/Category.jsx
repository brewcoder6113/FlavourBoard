import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import "./Styles/category.css";
import React from 'react';
import {NavLink} from "react-router-dom";
const Category = () => {
  return (
    <div className="List">
      <NavLink className="SLink" to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </div>
  )
}
export default Category;