/**
 * @param {{name: string, stocked: boolean, price: string}} product 
 * @returns {JSX.Element}
 */

function ProductRow({ product }) {

    let className = product.stocked ? 'row category-row' : 'row category-row out-of-stock'
  
    return <div className={className}>
      <div className="category-name">{product.name}</div>
      <div className="category-price">${product.price}</div>
    </div>
  }

  export default ProductRow