import React, { useEffect } from 'react'
import { Router } from './router'
import ErrorBoundry from './utils/error/ErrorBoundy'
import Login from './pages/auth/Login'
import { useDispatch, useSelector } from 'react-redux'
import {  loginCheck } from './store/AuthSlice'
import { Dispatch } from 'redux'


function App() {

  const authState = useSelector((state: any) => state.auth)

  let dispatch = useDispatch<Dispatch<any>>()
  useEffect(() => {
  
    dispatch(loginCheck())
    
  }, [])
  

  return <>
    {
      authState.isloading ? <></> : authState.isLogin ? <Router /> : <Login />
    }
  </>
}

export default App