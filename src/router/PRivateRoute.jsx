import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth";

export const PRivateRoute = ({ children }) => {

  const { logged } = useContext( AuthContext );
  const { pathname, search } = useLocation();

  // función que permite retornar a donde quede al cerrar sesión.
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath );

  return (logged )
  ? children
  : <Navigate to="/login" />
}
