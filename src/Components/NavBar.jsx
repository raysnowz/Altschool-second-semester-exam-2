const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="logo">
                <a href="/"><i>RAMBA</i></a>
            </nav>

            <div className="menu">
                <ul>
                    <li className="links"><a href="/">Home</a></li>
                    <li className="links"><a href="/about">About</a></li>
                    <li className="links"><a href="/counter">Counter</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavBar;