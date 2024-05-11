
import { Link } from "react-router-dom";
const Post = ({post}) => {
  const {body,tittle,id} = post;
    return (
        <div className="p-3 border-2 border-red-300 m-3">
            <h1>{tittle}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}> Details</Link>
            <button>Show Details</button>
        </div>
    );
};

export default Post;