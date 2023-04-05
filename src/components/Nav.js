function Nav() {
    const nav = {
        padding: "20px",
        border: "1px solid gray",
        background: "gold",
        margin: "20px 0"
    }
    return (
        <nav className="main-nav" style={nav}>
            <ul>
                <li>Home</li>
                <li>Article</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;