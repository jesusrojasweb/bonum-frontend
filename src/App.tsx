import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/CustomRoutes/PrivateRoute'
import PublicRoute from './components/CustomRoutes/PublicRoute'
import Header from './components/Header/Header'
import AppProvider from './context/AppContext'
import Coaches from './pages/Coaches'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Coaches />} />
          </Route>

          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/register" element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
