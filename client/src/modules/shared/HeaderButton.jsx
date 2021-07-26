import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paths from '../shared/DefaultPaths';


export default function HeaderButton(props) {
    const history = useHistory();

    const onClickRoute = () => {
        if (props.index === 0) {
            props.setTab(props.index);
            history.push(Paths[props.index]);
        }
        else if (props.index !== 6) {
            history.push(Paths[props.index]);
        }
        else {
            //logout
            let isOk = window.confirm("Do you really want to log out?");
            //if isOk then isLoggedIn = false
            if (isOk) {
                props.setTab(0);
                history.push(Paths[0]);
            }
            //else main and nothing changes
            else {

            }
        }
    }
    return (
        <Button
            onClick={onClickRoute}
            color="inherit"
            disableElevation>
            {props.name}
        </Button>

    )
}