import './navbar.css'


export function NavigationBar () {
    return (
        <nav className="navbar">
            <div className="navbar-brand">THI RESTURANT</div>
            <div className="navbar-links">
                <a href="#menu" className="navbar-link">Meny</a>
                <a href="#booking" className="navbar-link">Bokning</a>
                <a href="#contact" className="navbar-link">Kontakt</a>

            </div>
        </nav>
    )
}