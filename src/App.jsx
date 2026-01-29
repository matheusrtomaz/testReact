import './App.css'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { Button } from './components/ui/button'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div>
        <Button variant="outline" onClick={() => navigate("/")}>Início</Button>
        <span className="mx-2" />
        <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
        <span className="mx-2" />
        <Button variant="outline" onClick={() => navigate("/register")}>Registrar</Button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
