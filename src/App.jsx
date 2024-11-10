import { useState } from 'react'
import Layout from './Components/Layout'
import Login from './Components/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials. Please use "admin" for both username and password.')
    }
  }

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Layout />
      )}
    </div>
  )
}

export default App