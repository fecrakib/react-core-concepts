// import './Friend.css'
// import React from 'react'

// function Friend({friend}) {
//   return (
//     <div className='card'>
//         <h1>Name:{friend.name}</h1>
//         <h2>Email:{friend.email}</h2>
//     </div>
//   )
// }

// export default Friend

import React from 'react';

import './Friend.css';

function Friend({friend}) {
    const {name,email} = friend;
   
  return (
    <div className='card'>
        <h1> {name}</h1>
        <h2>Email: {email}</h2>
    </div>
  );
}

// Friend.propTypes = {
//   friend: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Friend;
