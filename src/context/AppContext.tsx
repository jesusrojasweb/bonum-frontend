import { createContext, useEffect, useMemo, useState } from 'react'
import refreshTokenService from '../services/refreshTokenService'
import { Coach, User } from '../types'

type UserContext = User | null

interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

interface ContextProps {
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
  user: UserContext
  setUser: React.Dispatch<React.SetStateAction<UserContext>>
  isAuth: boolean
  coaches: Coach[]
  setCoaches: React.Dispatch<React.SetStateAction<Coach[]>>
}

export const AppContext = createContext<ContextProps>({
  token: '',
  setToken: () => {},
  user: null,
  setUser: () => {},
  isAuth: false,
  coaches: [],
  setCoaches: () => {},
})

export default function AppProvider({ children }: ProviderProps) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState<UserContext>(null)
  const [coaches, setCoaches] = useState<Coach[]>([])
  const isAuth = useMemo(() => user !== null, [user])

  useEffect(() => {
    refreshTokenService()
      .then(response => {
        const { user, token } = response.data
        setUser(user)
        setToken(token)
      })
      .catch(error => {
        console.log('You were not logged before')
      })
  }, [])

  return (
    <AppContext.Provider
      value={{ token, setToken, user, setUser, isAuth, coaches, setCoaches }}
    >
      {children}
    </AppContext.Provider>
  )
}
