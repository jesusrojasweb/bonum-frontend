import { createContext, useState } from 'react'

interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

interface ContextProps {
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<ContextProps>({
  token: '',
  setToken: () => {},
})

export default function AppProvider({ children }: ProviderProps) {
  const [token, setToken] = useState('')

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  )
}
