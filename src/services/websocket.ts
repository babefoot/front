import { useState, useEffect, useRef, useCallback } from 'react';
import { game, tournament } from '../models/models';
import { log } from 'console';

interface payload{
    token: string;
    action: string;
    payload: {
        team?: string;
    }
}


function useWebSocket(url: string) {
    const [game, setGame] = useState<game>();
    const [tournament, setTournament] = useState<tournament>();
    const webSocket = useRef<WebSocket | null>(null);

    const token = "#^lxn6`S@Z9CGD"


    const goalAction = (team: string) => {
        console.log("GOALACTION");
        setGame(prevGame => {
            if (prevGame !== undefined) {
                console.log("aezaeazezaezaez");
                console.log(team);
                return team === "r" ? {...prevGame, score_team_red: prevGame.score_team_red + 1} : {...prevGame, score_team_blue: prevGame.score_team_blue + 1};
            }
            return prevGame; // Si prevGame est undefined, nous le retournons tel quel
        });
    }

    useEffect(() => {
        webSocket.current = new WebSocket(url);
        

        webSocket.current.onopen = () => {
            console.log('WebSocket connection opened');
            webSocket.current?.send(JSON.stringify({ token: token, action: "auth", me: 'front'}));
        };

        webSocket.current.onmessage = event => {
            const payload: payload = JSON.parse(event.data);
            console.log(payload);
            switch (payload.action) {
                case "goal":
                    goalAction(payload.payload.team as string);
                    break;
                case "game":
                    setGame(payload.payload as game);
                    break;
                case "end_game":
                    setGame(prevGame => {
                        if (prevGame !== undefined) {
                            return {...prevGame, state: "1"};
                        }
                        return prevGame; // Si prevGame est undefined, nous le retournons tel quel
                    });
                    break;
                case "tournament":
                    setTournament(payload.payload as tournament);
                    break;
                default:
                    break;
            }
        };

        webSocket.current.onerror = error => {
            console.log('WebSocket error: ', error);
        };

        webSocket.current.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }, []);

    const sendMessage = useCallback((message: String) => {
        if (webSocket.current && webSocket.current.readyState === WebSocket.OPEN) {
        webSocket.current.send(JSON.stringify(message));
        }
    }, []);

    return { game, tournament, sendMessage };
}

export default useWebSocket;