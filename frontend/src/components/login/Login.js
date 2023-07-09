import React from 'react';
import { useNavigate, Link } from "react-router-dom";

function Login({setIsLogged, setprivilage}) {

    const Login_ = (e) => {
        e.preventDefault();
        if(e.target.login.value && e.target.password.value) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: e.target.login.value, password: e.target.password.value})
            };
            fetch('http://localhost:8080/api/user/login', requestOptions)
                .then(response => response.json())
                .then(data => {console.log(data)
                    if(data.id) {
                        localStorage.setItem('privilage', data.admin ? "admin" : "user");
                        localStorage.setItem('id', data.id);
                        setIsLogged(true);
                        setprivilage(data.admin ? "admin" : "user");
                    } else {
                        alert("Błąd logowania!");
                    }
                })
                .catch(err => {
                    alert("Błąd logowania! Sprawdź dane");
                })
            
        } else {
            alert("W formularzu występuje błąd!");  
        }
    }

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="login-panel">
                    <h4>Zaloguj się i zrób zakupy!</h4>
                    <form onSubmit={(e) => Login_(e)}>
                        <div>
                            <label style={{display: "block", width: "100%"}} htmlFor="login">Nazwa użytkownika:</label>
                            <input type="text" name="login" id="login"/>
                        </div>
                        <div>
                            <label style={{display: "block", width: "100%"}} htmlFor="password">Hasło:</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <input type="submit" value="Zaloguj się"/>
                        <div className="clear"></div>
                    </form>
                    <div className="info">
                        <div className="clear"></div>
                        <span>Nie masz konta? <b><Link to="/register">Zarejestruj się!</Link></b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;