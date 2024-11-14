import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Project1 from './pages/Project1.jsx'
import NotFound from './pages/NotFound.jsx'


import { createHashRouter, RouterProvider } from 'react-router-dom';
import Business from './pages/Business.jsx'
import Template from './pages/Template.jsx'


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/business',
    element: <Business/>,
  },
  {
    path: '/template',
    element: <Template />,
  },

  {
    path: '/projects',
    element: <Projects />,
    children: [
      {
        path: '/projects/:id',
        element: <Project1 />,
      },

      ],
    },
    {
      path: '*',
      element: <NotFound />,
      },
    ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
