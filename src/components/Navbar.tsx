import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
        <nav>
            <div className="logo">
                <h2><NavLink to="/">Mania Blog</NavLink></h2>
            </div>
            <div className="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        </nav>
    </header>
  )
}
