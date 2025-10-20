import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import WelcomPage from './components/WelcomPage/WelcomPage.jsx'
import Page from './Page/Page.jsx'
import Home from './Page/Home.jsx'
import AllAnimePage from './Page/AllAnimePage.jsx'
import SearchPage from './components/SearchPage.jsx'
import AnimePage from './Page/AmimePage.jsx' // Import the AnimePage component
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { index: true, element: <WelcomPage /> }, // Renders at "/"
      {
        path: "home",
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          {
            path: 'search/:searchQuery',
            element: <SearchPage />
          },
          {
            path: "anime/:mal_id", // ✅ no leading slash!
            element: <AnimePage/> // This is the component that will render the anime details
          }

          
          ,// Renders at "/home"
          {
            path: "ongoinganime", // ✅ no leading slash!
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?filter[status]=current&sort=-startDate"
                titel="Ongoing anime"
              />
            )
          }
          ,
          {
            path: "upcominganime", // ✅ no leading slash!
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?filter[status]=upcoming&sort=startDate"
                titel="Upcoming Anime"
                
              />
            )
          },
          {
            path: "topanime", // ✅ no leading slash!
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?sort=-averageRating"
                titel="Top Anime"
                Page={0}
              />
            )
          },
          {
            path: "topairing", // ✅ no leading slash!
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?filter[status]=current&sort=-userCount"
                titel="Top Airing Anime"
                
              />
            )
          },
          {
            path: 'mostpopular',
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?sort=-userCount"
                titel="Most Popular Anime"
                Page={0}
              />
            )
          },
          {
            path: 'movies',
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?filter[subtype]=movie&sort=-startDate"
                titel="Movies"
               
              />
            )
          },
          {
            path: 'tvseries',
            element: (
              <AllAnimePage
                url="https://kitsu.io/api/edge/anime?filter[subtype]=TV&sort=-startDate"
                titel="TV Series"
                
              />
            )
          },
          {
            path: 'latest-completed',
            element: (
              <AllAnimePage
              url="https://kitsu.io/api/edge/anime?filter[status]=finished&sort=-startDate" 
              titel="Latest Completed" />                     
            )
          },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
