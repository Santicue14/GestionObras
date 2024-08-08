import { Navigate } from "react-router-dom"
import AuthContext from "./providers/AuthProvider"
import { useContext } from "react"

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext)
  return auth ? children : <Navigate to="/login" />
}
