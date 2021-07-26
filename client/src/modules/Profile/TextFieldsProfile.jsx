import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Buttons from './Buttons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const renderUncheckedChangeButton = () => ([
    <TextField
        key={0}
        required
        id="filled-disabled"
        label="Name"
        defaultValue="Name"
        variant="filled"
    />,
    <TextField
        key={1}
        required
        id="filled-disabled"
        label="Login"
        defaultValue="example@mail.com"
        variant="filled"
    />
])

const renderCheckedChangeButton = () => ([
    <TextField
        key={0}
        required
        id="filled-required"
        label="Name"
        defaultValue="Name"
        variant="filled"
    />,
    <TextField
        key={1}
        required
        id="filled-required"
        label="Login"
        defaultValue="example@mail.com"
        variant="filled"
    />,
    <TextField
        key={2}
        required
        id="filled-password-input"
        label="Old password"
        type="password"
        autoComplete="current-password"
        variant="filled"
    />,
    <TextField
        key={3}
        required
        id="filled-password-input"
        label="New password"
        type="password"
        autoComplete="current-password"
        variant="filled"
    />,

])


export default function FormPropsTextFields(props) {
    const classes = useStyles();

    const renderChangeButton = props.clickedButton === Buttons.CHANGE_BUTTON
        ? renderCheckedChangeButton
        : renderUncheckedChangeButton;

    return (
        <form
            className={classes.root} noValidate autoComplete="off">
            <div>
                {renderChangeButton()}
            </div>
        </form>
    );
}