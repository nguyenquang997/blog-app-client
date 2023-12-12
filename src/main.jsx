import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Container } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './firebase/config'
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container style={{textAlign:'center'}}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>,
)
