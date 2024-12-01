import React,{useState} from 'react';

const Hook = () =>{
  const [count,setCount] = useState(0);

const Increament = ()=>{
  setCount(count+1);
}
const Decreament = ()=>{
  setCount(count-1);
}

return(
  <>
  <div>
    <p>{count}</p>
    <button onClick={Increament}>Increament</button>
    <button onClick={Decreament}>Decreament</button>
  </div>
  </>
)
}
export default Hook;