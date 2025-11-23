import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/Avatar'
import TodoList from './components/TodoList'


function App() {
  return (
    <>
      <Avatar/>
      <TodoList/>
    </>
  )
}

export default App