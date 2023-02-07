import { Link } from "react-router-dom"

const Header = () => {
    return (
    <header id="app-header">
        NC Games Page
        <nav id="navBar" ><Link to="/">Home</Link></nav>
        </header>
    )
}

export default Header