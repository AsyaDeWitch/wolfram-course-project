import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory} from "react-router-dom";
import HeaderButton from './HeaderButton';
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const history = useHistory();
    const authContext = useContext(AuthContext)
    const { request } = useHttp()

    const renderUnauthenticatedButtons = () => ([
        <HeaderButton key={3} name="Sign In" index={3} />,
        <HeaderButton key={4} name="Sign Up" index={4} />,
    ])

    const handleLogout = async () => {
        await request('/api/auth/signout', 'POST');
        authContext.verify()
        props.setTab(0);
        history.push('/signIn');
    }

    const renderAuthenticatedButtons = () => ([
        <HeaderButton key={5} name="Profile" index={5} />,
        <Button
            key={6}
            onClick={handleLogout}
            color="inherit"
            disableElevation>
            Logout
        </Button>,
    ])

    const renderAuthenticationButtons = authContext.isAuthenticated
        ? renderAuthenticatedButtons
        : renderUnauthenticatedButtons;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <HeaderButton variant="h6" setTab={props.setTab} className={classes.title} key={0} name="WOLFASYA" index={0} />
                    <Typography variant="h6" className={classes.title}>

                    </Typography>
                    {renderAuthenticationButtons()}
                </Toolbar>
            </AppBar>
        </div>
    );
}



