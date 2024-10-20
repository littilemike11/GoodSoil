import './App.css'
import io from "socket.io-client"
const socketIO = io.connect("http://localhost:3000")
function App() {

  return (
    <>
      <h1>Same Brain</h1>
      <p>Round: # </p>
      <p>think of a word</p>

      <p>countdown timer here</p>

      <input
        className='input px-4'
        type="text"
        placeholder='RandomWord' />

      <button className='btn'>submit</button>

    </>
  )
}

export default App
