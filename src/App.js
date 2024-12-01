// import logo from './logo.svg';
// import Hook from './hook';
// import Form from './firstform';
// import searchfilter from './search';
import React from 'react';
import List from './list';
import './App.css';
// import React, { useState } from 'react';

const items = ["apple", "banana", "orange", "pear", "pineapple"];

const App = () => {
return (
<div>
<List items={items} />
</div>
);
};



// function App(){
//   const [count,setCount] = useState(0);
//   const increaseCount = () => {
//     setCount(count+1);
//   }
//   const decreaseCount = () =>{
//     setCount(count-1);
//   }
//   return(
//     <>
//        <div>
//         <h1>Count: {count}</h1>
//         <button onClick={increaseCount}>Increament</button>
//         <button onClick={decreaseCount}>Decreament</button>
//        </div>
//     </>
//   );
// }



export default App;
