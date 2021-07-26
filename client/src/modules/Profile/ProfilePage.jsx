import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@material-ui/core';
import { useHttp } from "../../hooks/http.hook";

export default function ProfilePage() {
    const [profile, setProfile] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const { request } = useHttp()

    useEffect(async () => {
        const result = await request('/api/profile', 'GET');
        setProfile(result.user);
        setEmail(result.user.email);
        setFirstName(result.user.firstName);
        setSecondName(result.user.secondName);
    }, [])

    const handleSubmit = async () => {
        try {
            await request('/api/profile', 'POST', { ...profile, email, firstName, secondName });
            alert('Data is successfully updated!');
        } catch {
            alert('Error. Please, check data');
        }
    }

    return (
        <Card>
            <CardHeader>Profile</CardHeader>
            <CardContent>
                {!profile
                    && <Typography>Loading profile...</Typography>
                    || (
                        <>
                            <div>
                                <TextField placeholder="First Name"
                                    label="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}>
                                </TextField>
                            </div>
                            <div>
                                <TextField placeholder="Second Name"
                                    label="Second Name"
                                    value={secondName}
                                    onChange={(e) => setSecondName(e.target.value)}>
                                </TextField>
                            </div>
                            <div>
                                <TextField placeholder="Email"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </TextField>
                            </div>
                        </>
                    )}
            </CardContent>
            {profile &&
                <CardActions>
                    <Button color="primary" onClick={handleSubmit}>Save</Button>
                </CardActions>
            }
        </Card>
    )
}