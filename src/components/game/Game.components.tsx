
import { Player } from "../../models/models";
import { Team } from "../team/Team.components";
import "./Game.scss";


interface GameProps {
    id: string,
    players: Player[],
    score_team_red: number,
    score_team_blue: number,
    state: string,
    start_game: () => void
}

export const Game = ({
    id,
    players,
    score_team_red,
    score_team_blue,
    state,
    start_game
}: GameProps) => {

    let teamBlue: Player[] = [];
    let teamRed: Player[] = [];
    if(players.length !== 0){
        teamBlue = players.filter((joueur) => joueur.team === "B");
        teamRed = players.filter((joueur) => joueur.team === "R");
    }    



    let title;
    switch (state) {
        case "0":
            title = "En attente de joueurs";
            break;
        case "2":
            title = "Partie en cours";
            break;
        default :   
            title = "Partie terminée";
            break;  
    }

    
    return (
        <div className="game">
            <h1 className="game__title">{title}</h1>
            <div className="game__infos">
                <Team players={teamBlue} color="bleue" key={1}/>
                <div className="game__infos__score">
                    <h2 className="game__infos__score--blue">{score_team_blue}</h2>
                    <h2>-</h2>
                    <h2 className="game__infos__score--red">{score_team_red}</h2>
                </div>
                <Team players={teamRed} color="rouge" key={2} />
            </div>
            {
                players.length % 2 === 0 && players.length > 0 && state === "0" && (
                    <div className="game__button">
                        <button className="game__button__start" onClick={() => start_game()} >Commencer la partie</button>
                    </div>
                )
            }
        </div>
    );
}