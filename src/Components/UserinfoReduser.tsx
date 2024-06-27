import { useReducer } from "react";

interface State{
    name:string;
    age:string;
    hobbies:string[]
}

type Action = 
|{type:"setName";payload:string}
|{type:"setAge";payload:string}
|{type:"addHobby",payload:string};

const initialState:State={
    name:'',
    age:'',
    hobbies:[],
}

const reducer = (state:State,action:Action):State=>{
    switch (action.type) {
        case 'setName':

            
            return {...state,name:action.payload};
        case "setAge":
            return {...state, age:action.payload}
        case "addHobby":    
            return {...state,hobbies:[...state.hobbies,action.payload]}
    
        default:
            return state;
    }
}



const UserinfoReduser = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
     // Type the event parameter for handleChange
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        if(name==='name'){
            dispatch({type:'setName',payload:value})
        }else if(name==='age'){
            dispatch({type:'setAge',payload:value})
        }
     };

     const handelHobbyChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        dispatch({type:'addHobby',payload:value})
        console.log(state);
     }
    return (
        <div>
             <form>
        <input
          className="border-2 p-2"
          type="text"
          onChange={handleChange}
          name="name"
          id="name"
          placeholder="name"
        />
        <br />
        <input
          className="border-2 p-2"
          type="number"
          onChange={handleChange}
          name="age"
          placeholder="age"
        />
        <br />
        <input
          className="border-2 p-2"
          type="text"
          onChange={handelHobbyChange}
          name="hobby"
          id="hobby"
          placeholder="hobby"
        />
      </form>
        </div>
    );
};

export default UserinfoReduser;