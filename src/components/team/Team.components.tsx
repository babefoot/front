
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


    return (
        <div className="game__infos__team">
            <h2 className={`game__infos__team--${color}`}>Equipe {color}</h2>
            <div className="game__infos__team__players">
                {players.map((player, index) => (
                    <h4>{player.firstname}</h4>
                ))}
            </div>
        </div>
    );
}