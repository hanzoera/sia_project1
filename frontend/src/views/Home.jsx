import ProductCard  from "../components/ProductCard"

function Home() {
    // sample array of objects (will be fetched from the database)
    const products = [
        { id: 1, name: 'CAT6 Cable', price: 20, stock: 4 },
        { id: 2, name: 'RJ45 Connector', price: 15, stock: 10 },
        { id: 3, name: 'RTX 3060', price: 12500, stock: 3 }
    ]

    return (
        <>
            { console.log('Home page loaded.') }
            <div className="home">
                <div className="products-grid">
                    {products.map(product => <ProductCard product={product} key={product.id}/>)}
                </div>
            </div>
        </>
    );
}

export default Home