import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Detail from '../../pages/Detail'
import App from '../../App'

const index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigate to='/home' replace='true' />} />
        <Route path="/home" element={<App/>} />
        <Route path="/news/:slug" element={<Detail/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default index