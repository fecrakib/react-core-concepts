

import { useState } from 'react';
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'

import Header from './Component/Header/Header'


function App() {
  const [readingTime,setReadingTime] = useState(0);
  const handleReadingTime = (id, Time) => {
      const newTime = readingTime+Time;
      setReadingTime(newTime);
      const remainingBookMark = bookMarks.filter(bookmark=>bookmark.id !==id);
      setBookmarks(remainingBookMark);
      console.log("reading:",id, readingTime);
  };
  const [bookMarks,setBookmarks] = useState([]);
  const handleBookMarks = blog=>{
    const newBookmarks = [...bookMarks,blog];
    setBookmarks(newBookmarks)
   
  };
 
  return (
 <>

<Header></Header>
<div className=' flex justify-evenly'>

<Blogs 
handleBookMarks ={ handleBookMarks } 
handleReadingTime={handleReadingTime}>

</Blogs>

<BookMarks 
readingTime={readingTime}
bookMarks={bookMarks}

>

</BookMarks>
</div>


 </>
  )
}

export default App
