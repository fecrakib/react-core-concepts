import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post  = useLoaderData();
    const {body,tittle,id} = post;
    return (
        <div className="p-3 border-2 border-r-zinc-800 m-3">
            <h1>{tittle}</h1>
            <p>{body}</p>
         
            <button>Show Details</button>
        </div>
    );
};

export default PostDetail;