import { useState } from "react"
import './assets/style.css'
import Input from "./components/forms/Input"
import Checkbox from "./components/forms/Checkbox"
import ProductRow from "./components/products/ProductRow"
import ProductCategoryRow from "./components/products/ProductCategoryRow"

const PRODUCTS = [
  { category: 'Fruits', price: '1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetable', price: '2', stocked: true, name: 'Spinach' },
  { category: 'Vegetable', price: '4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetable', price: '1', stocked: true, name: 'Peas' }
]

function App() {

  return <><SearchBar />
    <ProductTable products={PRODUCTS} />
  </>
}

function SearchBar() {
  return (
    <div className="search-bar">
      <Input placeholder="Search..." />
      <Checkbox checked={false} label="Show only products in stock" id="stocked" />
    </div>
  )
}




function ProductTable({ products }) {

  const rows = []
  let lastCategory = null

  products.forEach(product => {
    if (lastCategory !== product.category) {
      rows.push(<ProductCategoryRow key={product.category} catergoryName={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow key={product.name} product={product} />)
  })

  return (
    <div className="product-table">
      <div className="row category-types">
        <div className="category-name">Name</div>
        <div className="category-price">Price</div>
      </div>
      {rows}
    </div>
  )
}





export default App