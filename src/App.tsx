import { useState } from 'react'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <div className="app-container">
      <div className="portal-container">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>

        {isLogin ? (
          <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
        )}

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default App