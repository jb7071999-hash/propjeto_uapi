import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Login from './pages/Login'
import Catalogo from './pages/Catalogo'
import Carrinho from './pages/Carrinho'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
