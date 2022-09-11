import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import AuthButtons from './AuthButtons'
import LogOutButton from './LogOutButton'

function Header() {
  const { user } = useContext(AppContext)
  const thereUser = useMemo(() => user !== null, [user])

  return (
    <header className="flex justify-between max-w-6xl mx-auto py-6">
      <h1 className="font-bold text-lg">
        <Link to="/">Coaches</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          {thereUser ? <LogOutButton /> : <AuthButtons />}
        </ul>
      </nav>
    </header>
  )
}

export default Header
