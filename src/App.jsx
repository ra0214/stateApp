import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'

function App() {
  return (
  <HelmetProvider>
    <Home></Home>
  </HelmetProvider> 
) 
}

export default App