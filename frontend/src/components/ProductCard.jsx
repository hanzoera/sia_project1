
// Parameter accepts dynamic property information about the product about the component
function ProductCard({product}) {
    // Redirects to the product link page
    function onViewProductClick() {
        alert('Product Clicked');
    }

    return (
        // The card itself must be the clickable link to the product
        <div className="product-card">
            <div className="product-image">
                <img src={product.url} alt={product.name} />
            </div>
            <div className="product.info">
                <h2 className="product-name">{product.name}</h2>
                <h4 className="product-price">{product.price}</h4>
                <p>{product.stock}</p>
            </div>
        </div>
    );
}

export default ProductCard