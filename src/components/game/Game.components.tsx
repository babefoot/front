
import { Player } from "../../models/models";
import { Team } from "../team/Team.components";
import "./Game.scss";


interface GameProps {
    id: string,
    players: Player[],
    score_team_red: number,
    score_team_blue: number,
    state: string,
}

export const Game = ({
    id,
    players,
    score_team_red,
    score_team_blue,
    state
}: GameProps) => {

    let teamBlue = players.filter((joueur) => joueur.team === "B");
    let teamRed = players.filter((joueur) => joueur.team === "R");

    console.log(teamBlue);
    console.log(teamRed);
    
    
    return (
        <div className="game">
            <h1>Partie en cours</h1>
            <div className="game__infos">
                <Team players={teamBlue} color="bleue" key={1}/>
                <div className="game__infos__score">
                    <h2>{score_team_blue}</h2>
                    <h2>-</h2>
                    <h2>{score_team_red}</h2>
                </div>
                <Team players={teamRed} color="rouge" key={2} />
            </div>
            {state === "1" && 
                <div className="end_game">
                    <h2>La partie est terminé</h2>
                </div>
            }
        </div>
    );
}