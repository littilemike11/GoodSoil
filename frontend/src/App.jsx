import './App.css'
import { useEffect } from 'react'
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000")

function App() {
  const sendMessage = () => {
    socket.emit("send_message", { message: "HI hello world" })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message)
    })
  }, [socket])

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

      <button onClick={() => sendMessage()} className='btn'>submit</button>

    </>
  )
}

export default App
