import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField} from '@material-ui/core';
import { useHttp } from "../../hooks/http.hook";
import { useHistory } from 'react-router';
import { AuthContext } from "../../context/AuthContext";

export default function SignInPage(props) {
    const authContext = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { request } = useHttp()
    const history = useHistory();

    const handleSubmit = async () => {
        try {
            await request('/api/auth/signin', 'POST', { email, password });
            props.setTab(0);
            authContext.verify();
            history.push('/');
        } catch {
            alert('There was an error while trying to sign in');
        }
    }

    const handleSignUp = () => {
        history.push('/signUp');
    }

    return (
        <Card>
            <CardHeader>Login</CardHeader>
            <CardContent>
                <div>
                    <TextField
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </TextField>
                </div>
                <div>
                    <TextField placeholder="Password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></TextField>
                </div>
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={handleSubmit}>Sign In</Button>
                <Button color="primary" onClick={handleSignUp}>Sign Up</Button>
            </CardActions>
        </Card>
    )
}
