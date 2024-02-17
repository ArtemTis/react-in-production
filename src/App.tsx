import React, { Suspense } from 'react'
import { Counter } from './components/Counter'
import './index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './components/pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './components/pages/MainPage/MainPageAsync'

export const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  )
}
