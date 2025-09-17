import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting({ name }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function App() {
  const [count, setCount] = useState(0)
  const user = {
    firstName: 'Lynne',
    age: 20,
  }

    let conditional;
  if (user.age >= 18) {
    conditional = <p>You are an adult.</p>;
  } else {
    conditional = <p>You are a minor.</p>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Greeting name="lynne" />

      <h1 className="title">This is react-quickstart</h1>

       <section className="user-profile">
        <h2>User Profile</h2>
        <p>Name: {user.firstName}</p>
        <p>Age: {user.age}</p>
      </section>

      {conditional}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
