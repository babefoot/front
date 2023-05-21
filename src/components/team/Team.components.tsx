
import { Player } from "../../models/models";
import "./Team.scss";


interface TeamProps {
    players: Player[],
    color: string,
}

export const Team = ({
    players,
    color
}: TeamProps) => {

    //fill the players props with empty players if there is less than 4 players
    if(players.length < 2){
        for(let i = players.length; i < 2   ; i++){
            players.push({card_id: "", firstname: "...", lastname: "", team: ""});
        }
    }


    return (
        <div className="game__infos__team">
            <h2 className={`game__infos__team--${color}`}>Equipe {color}</h2>
            <div className="game__infos__team__players">
                {players.map((player, index) => (
                    <div>
                        <p>{player.firstname} {player.lastname}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}