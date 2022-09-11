import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { logOutService } from '../../services/logOutService'

function LogOutButton() {
  const { setToken, setUser } = useContext(AppContext)

  const logOut = async (e: any) => {
    await logOutService()
    setToken('')
    setUser(null)
  }

  return (
    <li>
      <Link
        to="#"
        onClick={logOut}
        className="bg-blue-500 text-white uppercase font-bold px-4 py-2 rounded-lg"
      >
        LogOut
      </Link>
    </li>
  )
}

export default LogOutButton
