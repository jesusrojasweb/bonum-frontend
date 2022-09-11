import { createContext, useState } from 'react'
import { User } from '../types'

type UserContext = User | null

interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

interface ContextProps {
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
  user: UserContext
  setUser: React.Dispatch<React.SetStateAction<UserContext>>
}

export const AppContext = createContext<ContextProps>({
  token: '',
  setToken: () => {},
  user: null,
  setUser: () => {},
})

export default function AppProvider({ children }: ProviderProps) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState<UserContext>(null)

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}
