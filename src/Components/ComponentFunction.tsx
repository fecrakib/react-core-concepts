import {  useState } from "react";


const ComponentFunction = () => {
    const [count,setcount]=useState(0);
    return (
        <div className="border border-red-500 m-10 p-32">
            <button onClick={()=>setcount((pre)=>pre+1)}>count{count}</button>
        </div>
    );
};

export default ComponentFunction;