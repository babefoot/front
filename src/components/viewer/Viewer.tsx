import useWebSocket from "../../services/websocket"
import {Game} from "../../components/game/Game.components";


export const Viewer = () => {

    const url = 'ws://localhost:8080';

    const { game, tournament, sendMessage } = useWebSocket(url);

    return (
        <div>
            {game && <Game players={game.players} id={game.id} score_team_blue={game.score_team_blue} score_team_red={game.score_team_red} state={game.state} />}
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