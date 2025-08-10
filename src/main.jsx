import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import Router from './routes/Routes'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider  router={Router}/>
    </Provider>
  </StrictMode>,
)
