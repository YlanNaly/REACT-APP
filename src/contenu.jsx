import React from "react";

function Mytables(props){
const {Name,Office,Position,Age,Salary,Start} = props ; 
   
   return (
     
       <tr>
        <td>{Name}</td>
        <td>{Position}</td>
        <td>{Office}</td>
        <td>{Age}</td>
        <td>{Start}</td>
        <td>{Salary}</td>
    </tr> 
       )
}
export default Mytables;
