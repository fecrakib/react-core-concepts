import React, { useEffect, useState } from 'react'

import Friend from './Friend';

function Friends() {
    const [friends,setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
  return (
    <div className='container'>
        <h3>Friends:{friends.length}</h3>
        {
            friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
        }
    </div>
  )
}

export default Friends