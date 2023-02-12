import { Link } from "react-router-dom"

const Header = () => {
    return (
    <header id="app-header">
        NC Games Page
        <nav alt="Link to home page" id="navBar" ><Link to="/">Home</Link></nav>
        </header>
    )
}

export default Header