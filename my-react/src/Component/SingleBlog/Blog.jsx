

function Blog({blog,handleBookMarks,handleReadingTime }) {
  const {id,title,cover,author,posted_date,hashtags,reading_time,author_img} = blog;
  return (
    <div >
       <img className="w-full rounded-md" src={cover} alt="" /> 
       <div className="flex p-3">
        <div className="flex items-center">
           <img className="w-[10%]  rounded-full" src={author_img} alt="" />
          <div className="mx-4">
          <p>{author}</p>
           <p>{posted_date}</p>
          </div>
        </div>
        <div>
            <p>Time:{reading_time}</p>
            <button onClick={()=> handleBookMarks(blog) }>Add</button>
        </div>
       </div>
       <div className="px-3 ">
        <h1>{title}</h1>
        <h1>
            {
                hashtags.map((hastag)=>(
                    <span key={hastag} >
                        <a href=""># {hastag}</a>
                    </span>
                ))
            }
        </h1>
       </div>
       <div className="text-purple-700 px-3 pb-3">
       <button  onClick={()=> handleReadingTime(id, reading_time)} >Mark As Read</button>
      
       </div>
   

    </div>
  )
}

export default Blog