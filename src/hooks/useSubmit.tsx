import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import registerService from '../services/authService'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'
import { AuthPages } from '../enums'

const useSubmit = (INITIAL_USER: User, page: AuthPages) => {
  const navigate = useNavigate()
  const [authValues, setAuthValues] = useState<User>(INITIAL_USER)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setToken, setUser } = useContext(AppContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const { password } = authValues

    if (password !== undefined && password.trim().length < 8) {
      setError('Password must contain a minimum of 8 characters')
      return
    }
    registerService(authValues, page)
      .then(response => {
        const { token: newToken, name, email, isAdmin } = response.data
        setUser({
          name,
          email,
          isAdmin,
        })
        setToken(newToken)
        navigate('/')
      })
      .catch(error => {
        const messageError =
          error.response.data.error ||
          error.response.data.errors
            .map(({ msg }: { msg: string }) => msg)
            .join(', ')
        setError(messageError)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    authValues,
    setAuthValues,
    handleSubmit,
    isLoading,
    error,
  }
}

export default useSubmit
