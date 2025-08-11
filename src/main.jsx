import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import Router from './routes/Routes'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from "redux-persist";
import store from './redux/store'

let Persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
          <RouterProvider  router={Router}/>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
