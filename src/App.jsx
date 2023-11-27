import { useState } from "react"
import './assets/style.css'




function searchBar() {

  return <div className="search-bar">
    <div className="input-wrapper">
      <input type="text" name="search" id="search-input" placeholder="Rechercher" />
    </div>
    <div className="input-wrapper">
      <input type="checkbox" name="isInStock" id="is-in-stock-checkbox" />
      <label htmlFor="isInStock">N'afficher que les produits en stock</label>
    </div>
  </div>
}



function productTable() {

  return <div className="product-table">
    <div className="row category-types">
      <div className="types-name">Nom</div>
      <div className="types-price">Prix</div>
    </div>
    <div className="category category-fructs">
      <div className="row category-title">Fruits</div>
      <div className="row category-row">
        <div className="product-name">Apple</div>
        <div className="product-price">$1</div>
      </div>
      <div className="row category-row">
        <div className="product-name">Dragonfruit</div>
        <div className="product-price">$1</div>
      </div>
      <div className="row category-row highest-price">
        <div className="product-name">Passionfruit</div>
        <div className="product-price">$2</div>
      </div>
    </div>
    <div className="category category-vegetables">
      <div className="row category-title">Vegetables</div>
      <div className="row category-row">
        <div className="product-name">Spinach</div>
        <div className="product-price">$2</div>
      </div>
      <div className="row category-row highest-price highest-price">
        <div className="product-name">Pumpkin</div>
        <div className="product-price">$4</div>
      </div>
      <div className="row category-row">
        <div className="product-name">Peas</div>
        <div className="product-price">$1</div>
      </div>
    </div>
  </div>

}

export { searchBar as SearchBar, productTable as ProductTable }