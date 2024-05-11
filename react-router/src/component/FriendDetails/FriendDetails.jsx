import { useLoaderData } from "react-router-dom";


function FriendDetails() {
const friend  = useLoaderData();
console.log(friend)
    
  return (
    <div className="p-4">
    <h1>This is the Friend details</h1>
    <p>Name: {friend.name}</p>
    <p>Email: {friend.email}</p>
    {/* Display other friend details as needed */}
  </div>
  )
}

export default FriendDetails