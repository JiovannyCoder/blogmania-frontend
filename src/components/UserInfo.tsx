import useLogout from "../hooks/useLogout"
import useUserInfo from "../hooks/useUserInfo"


export default function UserInfo() {
  const { logout } = useLogout()
  const { userInfo, isLoading, error } = useUserInfo()

  return (
    <div className="user-info-card">
      {!isLoading && userInfo && (
        <>
          <div className="avatar mb-3">
            {userInfo.firstname[0] + userInfo.lastname[0]}
          </div>
          <div>
            <h3>{userInfo.firstname + ' '+ userInfo.lastname}</h3>
            <p className="text-gray-500">{userInfo.email}</p>
          </div>
        </>
      )}
      {error && <div className="alert-error">{error}</div>}
      <button className="btn-outline-primary" onClick={() => logout()}>Logout</button>
    </div>
  )
}
