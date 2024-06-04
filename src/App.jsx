import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
  <HelmetProvider>
    <Home></Home>
  </HelmetProvider> 
) 
}

export default App
