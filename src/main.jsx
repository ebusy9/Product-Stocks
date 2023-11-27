import React from 'react'
import ReactDOM from 'react-dom/client'
import {SearchBar, ProductTable } from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchBar />
    <ProductTable />
  </React.StrictMode>,
)
