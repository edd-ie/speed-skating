import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
