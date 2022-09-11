import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import AppProvider from './context/AppContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
