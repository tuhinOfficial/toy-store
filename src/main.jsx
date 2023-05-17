import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-[80%] mx-auto'>
    <RouterProvider router={router}></RouterProvider>
  </div>
)
