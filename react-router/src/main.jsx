import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import About from './component/About';
import Contact from './component/contact/Contact';

import Home from './component/Home/Home';
import First from './component/Frist/First';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import Post from './component/Posts/Post/Post';
import PostDetail from './component/PostDetail/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<First></First>

      },
      {
        path:"friends",
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"friend/:friendId",
        element:<FriendDetails></FriendDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          
      },

      {
        path:"about",
        element:<About></About>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"posts",
        element:<Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:"post/:postId",
        element:<PostDetail></PostDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <RouterProvider router={router} />
  </React.StrictMode>,
)
