import React from 'react';

const list = ({items})=>{
  return (
    <ul>
      {items.map((items,index)=>(
        <li key={index}>{items}</li>
      ))}
    </ul>
)}

export default list;