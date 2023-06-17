import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { CssBaseline } from '@mui/material'
import AppRoutes from './routes/AppRoutes'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <CssBaseline />
        <AppRoutes />
      </Provider>
    </React.Fragment>
  )
}

export default App
