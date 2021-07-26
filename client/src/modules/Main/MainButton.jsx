import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paths from '../shared/DefaultPaths';


export default function MainButton(props) {
    const history = useHistory();

    const onClickRoute = () => {
        props.setTab(1);
        history.push(Paths[1]);
    }
    return (
        <Button
            onClick={onClickRoute}
            variant="contained"
            color="primary"
            disableElevation>
            {props.name}
        </Button>

    )
}

