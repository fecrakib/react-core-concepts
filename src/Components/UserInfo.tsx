import { useState } from "react";

interface User {
    name: string;
    age: string;
    hobbies: string[];
  }
  
const UserInfo = () => {
    const [user,setUser]=useState<User>({name:"",age:'0',hobbies:[]});
    console.log(user)
    return (
      
        <div className="border border-red-500 m-10 p-32">
            <form action="">
         
                <input className="border-2 p-2 " type="text"
                       onChange={(e)=>setUser({ ...user,name:e.target.value})}
                name="name"
                id="name"
                placeholder="name"
                />
<br />
            <input className="border-2 p-2 " type="number"
            onChange={(e)=>setUser({...user,age:e.target.value})}
            name="age"
            placeholder="age"
            
            />    <br />
                 <input type="text"
               onChange={(e)=>setUser({...user, hobbies:[...user.hobbies,e.target.value]})}
                name="hobby"
                id="hobby"
                placeholder="hobby"
                />
            </form>
        </div>
    );
};

export default UserInfo;