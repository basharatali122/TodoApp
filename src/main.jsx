import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoItemsContextProvider from './Components/ItemsContext-Store.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <TodoItemsContextProvider>
    <App />
    </TodoItemsContextProvider>
  </StrictMode>
  ,
)
