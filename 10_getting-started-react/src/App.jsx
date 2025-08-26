import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="logo-section">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>About Me</h1>
      <div className="card">
        <p><strong>Name:</strong> John Russel Regalado</p>
        <p><strong>Course/Year:</strong> BS Information Systems 3rd Year</p>
        <p><strong>Fun Fact:</strong> I know basic ASL (American Sign Language)</p>
      </div>

      <h2>Why I Want to Learn React</h2>
      <div className="card">
        <p>
         React's flexibility is why I want to learn it. React is widely used in the web development industry because it makes it possible for developers to create dynamic and interactive user experiences rapidly.
        </p>
      </div>
    </>
  )
}

export default App
