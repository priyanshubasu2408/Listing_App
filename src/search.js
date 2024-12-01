import { useState } from "react";

const searchfilter = ({data}) => {
  const [query,setQuery] = useState("");
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};

return(
  <div>
    <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}/>
    <ul>
      {filteredData.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default searchfilter;