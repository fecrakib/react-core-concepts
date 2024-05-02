import { useEffect, useState } from "react";
import Blog from "../SingleBlog/Blog";


function Blogs() {
  const [blogs,setBlogs] = useState([]);
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  
  return (
    <div className="md:w-2/3 p-4">
      Blogs:{blogs.length}

    {
      blogs.map(blog=><Blog key={blog.id}
      blog={blog}
      
      
      >


      </Blog>)
    }

    </div>
  )
}

export default Blogs