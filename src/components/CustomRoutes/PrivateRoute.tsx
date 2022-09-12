import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

function PrivateRoute() {
  const { isAuth } = useContext(AppContext)

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
