import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField} from '@material-ui/core';
import { useHttp } from "../../hooks/http.hook";
import { useHistory } from 'react-router';
import { AuthContext } from "../../context/AuthContext";

export default function SignUpPage(props) {
    const authContext = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { request } = useHttp()
    const history = useHistory();

    const handleSubmit = async () => {
        try {
            await request('/api/auth/signup', 'POST', { email, password });
            await request('/api/auth/signin', 'POST', { email, password });
            props.setTab(0);
            authContext.verify();
            history.push('/');
        } catch {
            alert('There was an error while trying to sign up');
        }
    }

    const handleSignIn = () => {
        history.push('/signIn');
    }

    return (
        <div>
            <Card>
                <CardHeader>Registration</CardHeader>
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
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>
                    <Button color="primary" onClick={handleSignIn}>Already Have Account</Button>
                </CardActions>
            </Card>
        </div>
    )
}
