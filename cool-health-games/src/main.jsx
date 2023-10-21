import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Root from './routes/root';
import HandEye from './routes/handEye';
import Memory from './routes/memory';
import Reaction from './routes/reaction';
import Simon from './routes/simon';

const router = createBrowserRouter([
{
  path: "/",
  element: <Root />,
},
{
  path: "/handeye",
  element: <HandEye />,
},
{
  path: "/memory",
  element: <Memory />,
},
{
  path: "/reaction",
  element: <Reaction />,
},
{
  path: "/simon",
  element: <Simon />,
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
