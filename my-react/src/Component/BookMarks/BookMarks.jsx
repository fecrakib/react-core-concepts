import BookMark from "../BookMark/BookMark";



function BookMarks({bookMarks}) {
    const {title} = bookMarks;
  return (
    <div className="bg-slate-200 p-2 m-2 rounded-md">
        BookMarks:{bookMarks.length}
    {
    bookMarks.map((bookmark,idx)=>(
        <BookMark key={idx} bookmark={bookmark}></BookMark>
    ))
    }
    
    </div>
  )
}

export default BookMarks