import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(username, password)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          aria-hidden="true" 
          style={{
            width: '650px',
            height: '650px',
            fill: 'white'
          }}
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ width: '550px' }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Happening now
          </h1>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '32px'
          }}>
            Join today.
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid #333',
                fontSize: '16px'
              }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid #333',
                fontSize: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '9999px',
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Log in
            </button>
          </form>
          <p style={{
            fontSize: '12px',
            color: '#6e767d',
            marginTop: '16px',
            textAlign: 'center'
          }}>
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
          </p>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ color: '#6e767d' }}>Already have an account?</p>
            <button
              style={{
                marginTop: '16px',
                width: '100%',
                padding: '12px',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                color: '#1d9bf0',
                border: '1px solid #333',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}