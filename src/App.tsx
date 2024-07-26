import React from 'react'
import { Router } from './router'
import ErrorBoundry from './utils/error/ErrorBoundy'
import Login from './pages/auth/Login'
import { useSelector } from 'react-redux'

function App() {

  const authState = useSelector((state: any) => state.auth)

  return <>
    {
      authState.isLogin ? <Router /> : <Login />
    }
  </>
}

export default App