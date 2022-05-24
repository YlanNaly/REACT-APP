import React from "react";
import '../src/App.css';
import { ReactDOM } from "react-dom";
import { useState } from "react";

function search(props){
   const handleChange  = props;
   
   return (
<div className="input-group">

    <input className="form-control" type="text" placeholder="Search in table " aria-label="Search for..." aria-describedby="btnNavbarSearch"  
     defaultValue={handleChange} />
    <button className="btn btn-primary" id="btnNavbarSearch" type="button"  ><i className="fas fa-search"></i></button>

</div>
   )
}
