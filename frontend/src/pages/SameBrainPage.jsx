import { useEffect, useState } from 'react'
import io from "socket.io-client"
import GameTitle from '../components/GameTitle'
import GameRules from '../components/GameRules'
const socket = io.connect("http://localhost:3000")
export default function SameBrainPage() {
    const [counter, setCounter] = useState(30)
    const [guess, setGuess] = useState("")
    const [guessed, setGuessed] = useState(false)
    const [messageReceived, setMessageReceived] = useState(false)
    const sendMessage = () => {
        if (!guess) return
        socket.emit("send_message", { message: guess })
        setGuessed(true)
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message)
        })
    }, [socket])
    return (
        <>
            <GameTitle title="Same Brain" ></GameTitle>
            <GameRules
                content={
                    <ul>
                        <li>
                            Think of a random word.
                        </li>
                        <li>
                            After timer, both players words are revealed.

                        </li>
                        <li>
                            If the words are different, think of a new "midway" word.

                        </li>
                        <li>
                            The game continues until both players guess on same word.
                        </li>
                        <li className='text-red-700'>You cannot repeat words</li>
                    </ul>

                }
            ></GameRules>
            <p className='text-left'>Round: 1 </p>
            <span className="countdown">
                <span style={{ "--value": counter }}></span>s
            </span>

            <p>left</p>


            <input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className='input px-4 m-4'
                type="text"
                placeholder='RandomWord' />

            <button onClick={() => sendMessage()} className='btn'>submit</button>

            {guessed &&
                <div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
                        <div>Your Word</div>
                        <div>
                            {guess}
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
                        <div>Player 2's word</div>
                        <div>
                            {messageReceived ? messageReceived : "still thinking...."}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}