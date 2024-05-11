import { Link } from "react-router-dom";

const Friend = ({friend}) => {
  
    const {name,email,id} = friend;
    return (
        <div className="p-3 w-[300px] border-2 m-3 border-gray-500">
            <h1>{name}</h1>
            <p>{email}</p>
            <p> <Link to={`/friend/${id}`}>Show me Details</Link></p>
          
        </div>
    );
};

export default Friend;