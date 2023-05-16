
export interface Player{
    card_id: string,
    firstname: string,
    lastname: string,
    team: string
}

export interface game {
  id: string,
  players: Player[],
  nb_players: number, 
  state: string, 
  score_team_red: number, 
  score_team_blue: number;
}

export interface tournament {
    id: string, nb_players: number, state: string, score_team_red: number, score_team_blue: number  ;
}

