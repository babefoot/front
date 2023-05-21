import useWebSocket from "../../services/websocket"
import "./Waiting.scss"


export const Waiting = () => {

    const url = 'ws://localhost:8080';

    const { game, tournament, sendMessage } = useWebSocket(url);

    return (
        <div className="waitingGame">
            <h1>Waiting for game</h1>

        </div>
    );
}