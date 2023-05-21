import { useState } from "react";
import { PageContainer } from "../Page.container"
import {login} from "../../services/api";
import "./Admin.scss";

const Admin = () => {



    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    const loginSubmit = async () => {
        const res = await login(password);
        setLoggedIn(res);
    }
    
    return (
        <PageContainer>
            <div>
                {!loggedIn && (
                    <>
                    <h1>Admin</h1>
                    <div>
                        <input type="text" placeholder="password" onChange = {(e) => setPassword(e.target.value)}/>
                        <button onClick={() => loginSubmit() }>Log in</button>
                    </div>
                    </>
                )}
                {loggedIn && (
                    <div className="createTournament">
                        <h2>Admin panel</h2>
                        
                    </div>
                )}
            </div>
        </PageContainer>
    )
}


export default Admin
