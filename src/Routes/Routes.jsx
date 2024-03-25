import Home from '../Pages/Home.jsx'
import Blogs from '../Pages/Blogs.jsx'
import Bookmarks from '../Pages/Bookmarks.jsx'
import MainLayOut from '../Layout/MainLayOut.jsx'
import SingleBlog from '../Pages/SingleBlog.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Content from '../Components/Content.jsx'
import Author from '../Components/Author.jsx'

export const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader:()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path:'/blog/:id',
          element:<SingleBlog></SingleBlog>,
          loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content></Content>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author></Author>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>
        }
      ]
    }
    
  ])