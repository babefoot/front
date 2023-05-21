import { ChangeEventHandler, useEffect, useState } from "react";
import { PageContainer } from "../Page.container"
import "./Statistics.scss";
import { playerStat, top10, getPlayers } from "../../services/api";
import { log } from "console";


const Statistics: React.FC = () => {


  const [ playerStats, setPlayerStats ] = useState<any>(null);
  const [ top10Players, setTop10Players ] = useState<any>(null);
  const [ players, setPlayers ] = useState<any>(null);
  const [matchingPlayers, setMatchingPlayers] = useState<any>(null);
  const [isGoal, setIsGoal] = useState<string>("goal");


  useEffect(() => {

    const fetchPlayersAndTop10 = async () => {
      const res = await getPlayers();

      const resTop10 = await top10();

      setTop10Players(resTop10);
      setPlayers(res);
    }
    fetchPlayersAndTop10();
  }, []);

  const searchPlayerStats = (e: any) => {
    console.log(e.target.value);
    if(e.target.value === "") return setMatchingPlayers(null);
    const matchingPlayers = players.filter((player: any) => {
      return player.firstname.toLowerCase().includes(e.target.value.toLowerCase()) || player.lastname.toLowerCase().includes(e.target.value.toLowerCase());
    }
    )
    setMatchingPlayers(matchingPlayers);
  }

  const handleChoosePlayer = async (id: any) => {
    console.log(id);
    const res = await playerStat(id);
    console.log(res);
    
    setPlayerStats(res);
  }

  const handleChooseTop10 =  () => {
    console.log(isGoal);
    
    isGoal === "goal" ? setIsGoal("win") : setIsGoal("goal");
  }




  return (
    <PageContainer>
        <div className="statsPage">
            <h1 className="title">Classement</h1>
            <input type="text" placeholder="Rechercher un joueur" className="searchBar" onChange={(e) => searchPlayerStats(e)}/>
            {matchingPlayers && (
            <div className="playersToSelect">
              {matchingPlayers.map((player: any) => (
                  <li className="playerName" key={player.id} onClick={() => handleChoosePlayer(player.id)}>{player.firstname} {player.lastname}  </li>
              ))}
            </div>)
            }
        </div>
        {playerStats && (
          <div className="statPlayer">
            <h1>Statistique de <br></br>{playerStats.firstname} {playerStats.lastname}</h1>
            <p className="nb_buts">Nombre de buts : {playerStats.nb_buts}</p>
            <p className="nb_won">Nombre de matchs gagnés : {playerStats.nb_matchs_won}</p>
          </div>
        )}
        <div className="top10">
          <h1>Top 10</h1>
          <div className="type">
            <p>Buts</p>
            <label className="switch" onChange={() => handleChooseTop10()} >
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
            <p>Matchs gagnés</p>
          </div>
          {top10Players && (
            <div className="top10Players">
              {top10Players[isGoal].map((player: any, index: number) => (
                <div className="player" key={player.id}>
                  <p className="playerName"> {index+1}: {player.firstname} {player.lastname}</p>
                  <p className="playerStat">{isGoal === 'goal' ? `${player.nb_buts} buts` : `${player.nb_matchs_won} gagné(s)` }</p>
                </div>
              ))}
            </div>
          )}
        </div>
    </PageContainer>
  )
}

export default Statistics