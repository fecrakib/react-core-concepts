

function Blog({blog}) {
  const {id,title,cover,author,posted_date,hashtags,reading_time,author_img} = blog;
  return (
    <div >
       <img className="w-full rounded-md" src={cover} alt="" /> 
       <div className="flex p-3">
        <div className="flex ">
           <img className="w-[10%]  rounded-full" src={author_img} alt="" />
          <div className="mx-4">
          <p>{author}</p>
           <p>{posted_date}</p>
          </div>
        </div>
        <div>
            <p>Time:{reading_time}</p>
            <button>Add</button>
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
       <button className="text-purple-700 px-3 pb-3">Mark As Read</button>

    </div>
  )
}

export default Blog