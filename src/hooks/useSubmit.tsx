import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import registerService from '../services/registerService'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

const useSubmit = (INITIAL_USER: User) => {
  const navigate = useNavigate()
  const [registerValues, setRegisterValues] = useState<User>(INITIAL_USER)
  const [error, setError] = useState('')
  const { setToken } = useContext(AppContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const { password } = registerValues

    if (password.trim().length < 8) {
      setError('Password must contain a minimum of 8 characters')
      return
    }
    registerService(registerValues)
      .then(response => {
        const { token: newToken } = response.data
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
  }

  return {
    registerValues,
    setRegisterValues,
    handleSubmit,
    error,
  }
}

export default useSubmit
