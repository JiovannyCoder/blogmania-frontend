import { NavLink } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"

export default function Navbar() {
  const { user } = useAuthContext()

  return (
    <header>
      <nav>
        <div className="logo">
          <h2><NavLink to="/">Mania Blog</NavLink></h2>
        </div>
        <div className="menu">
          <NavLink to="/">Home</NavLink>
          {user && (
            <>
              <NavLink to="/profil">Profil</NavLink>
            </>
          )}
          {!user && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
