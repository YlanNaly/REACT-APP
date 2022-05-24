import React from "react";
import '../src/App.css';

function SearchBar(props) {
   const label = 'search' ;
  
    return(   
<div className="input-group">
    <input className="form-control" type="text" placeholder={label} aria-label="Search for..." aria-describedby="btnNavbarSearch" />
    <button className="btn btn-primary" id="btnNavbarSearch" type="button"  ><i className="fas fa-search"></i></button>
</div>
    )
}

export default SearchBar;