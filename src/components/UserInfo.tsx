import useAuthContext from "../hooks/useAuthContext"
import useLogout from "../hooks/useLogout"


export default function UserInfo() {
  const { user } = useAuthContext()
  const {logout} = useLogout()

  return (
    <div className="user-info-card">
        <div className="avatar mb-3">
            JD
        </div>
        <div>
            <h3>John Doe</h3>
            <p className="text-gray-500">{ user?.email }</p>
            <button className="btn-outline-primary" onClick={() => logout()}>Logout</button>
        </div>
    </div>
  )
}
