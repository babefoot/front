import useWebSocket from "../../services/websocket"
import {Game} from "../../components/game/Game.components";
import { useEffect, useState } from "react";
import "./Viewer.scss";


export const Viewer = () => {

    const url = 'ws://localhost:8080';

    const [goal, setGoal] = useState("");
    const { game, tournament, sendMessage } = useWebSocket(url, setGoal);

    const startGame = () => {
        console.log("start game");
        sendMessage({
            action: "start_game",
            payload: {
            }
        })
    }

    useEffect(() => {
        if (goal) {
          const timer = setTimeout(() => {
            setGoal("");
          }, 2000);  // durée de l'animation
    
          return () => {
            clearTimeout(timer);
          };
        }
      }, [goal]);


    return (
        <div>
            {game && <Game players={game.players} id={game.id} score_team_blue={game.score_team_blue} score_team_red={game.score_team_red} state={game.state} start_game={startGame} />}
            {goal === "B" && <div className="goal blue">GOALLLL !!</div>}
            {goal === "R" && <div className="goal red">GOALLLL !!</div>}
            {tournament && (
                <>
                    <h1>Tournament</h1>
                    <div>
                        <p>Tournament id: {tournament.id}</p>
                    </div>
                </>
            )}
        </div>
    );
}