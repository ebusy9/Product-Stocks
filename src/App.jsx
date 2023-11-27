import { useState } from "react"
import './assets/style.css'


function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <Input />
      </div>
      <div className="checkbox-wrapper">
        <Checkbox />
      </div>
    </div>
  )
}

function Input() {

  return <input type="text" name="search" id="search-input" placeholder="Search" />
}

function Checkbox() {

  return <>
    <input type="checkbox" name="isInStock" id="is-in-stock-checkbox" />
    <label htmlFor="isInStock">Show only products in stock</label>
  </>
}

function ProductTable() {
  return (
    <div className="product-table">
      <div className="row category-types">
        <div className="category-name">Name</div>
        <div className="category-price">Price</div>
      </div>
      <ProductCategoryRow catergoryName="Fruits" />
      <ProductRow productName="Apple" productPrice="1" />
      <ProductRow productName="Dragonfruit" productPrice="1" />
      <ProductRow productName="Passionfruit" productPrice="2" highestPrice/>
      <ProductCategoryRow catergoryName="Vegetable" />
      <ProductRow productName="Spinach" productPrice="2" />
      <ProductRow productName="Pumpkin" productPrice="4" highestPrice/>
      <ProductRow productName="Peas" productPrice="1" />
    </div>
  )
}

function ProductCategoryRow({ catergoryName }) {
  return <div className="row category-title">{catergoryName}</div>
}

function ProductRow({ productName, productPrice, highestPrice}) { 

  let className = highestPrice ? 'row category-row highest-price' : 'row category-row'

  return <div className={className}>
    <div className="category-name">{productName}</div>
    <div className="category-price">${productPrice}</div>
  </div>
}

export { SearchBar, ProductTable }