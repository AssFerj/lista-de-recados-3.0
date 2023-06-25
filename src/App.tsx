import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { CssBaseline, ThemeProvider } from '@mui/material'
import AppRoutes from './routes/AppRoutes'
import React from 'react'
import { theme } from './config/Theme/Theme'

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {/* <CssBaseline /> */}
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App
