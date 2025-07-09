import { Link } from 'react-router-dom'

function Header() {

    return(
        <header>
            <h1>Sample Shop Name</h1>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/index">Account</Link></li>
                </ul>
            </nav>
        </header>        
    );
}

export default Header