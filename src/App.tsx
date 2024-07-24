import React from 'react'
import { Router } from './router'
import ErrorBoundry from './utils/error/ErrorBoundy'

function App() {


  return <ErrorBoundry fallback={<div>Something went wrong</div>}>
    <Router />
  </ErrorBoundry>
}

export default App