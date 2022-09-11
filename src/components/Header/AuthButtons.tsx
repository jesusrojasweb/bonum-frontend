import { Link } from 'react-router-dom'

function AuthButtons() {
  return (
    <>
      <li>
        <Link to="/login" className="uppercase font-semibold px-4 py-2">
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="bg-blue-500 text-white uppercase font-bold px-4 py-2 rounded-lg"
        >
          Register
        </Link>
      </li>
    </>
  )
}

export default AuthButtons
