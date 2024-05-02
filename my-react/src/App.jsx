

import { useState } from 'react';
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'

import Header from './Component/Header/Header'


function App() {
  const [bookMarks,setBookmarks] = useState([]);
  const handleBookMarks = blog=>{
    const newBookmarks = [...bookMarks,blog];
    setBookmarks(newBookmarks)
    console.log(bookMarks)
  };
 
  return (
 <>

<Header></Header>
<div className=' flex justify-evenly'>

<Blogs handleBookMarks ={ handleBookMarks }></Blogs>
<BookMarks bookMarks={bookMarks}></BookMarks>
</div>


 </>
  )
}

export default App
