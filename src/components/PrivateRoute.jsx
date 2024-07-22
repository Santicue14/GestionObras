import { Navigate } from "react-router-dom"

export const PrivateRoute = ({isLogged, children}) => {
  return isLogged ? children : <Navigate to="/login" />
}
