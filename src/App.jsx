import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Volunteer from './components/Directory/Volunteer'
import Tutorial from './components/Directory/Tutorial'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/volunteer",
        element: <Volunteer/>
      },
      {
        path: "/tutorial",
        element: <Tutorial/>
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
