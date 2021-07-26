import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paths from '../shared/DefaultPaths';


export default function CardButton(props) {
    const history = useHistory();

    const onClickRoute = () => {
        props.setTab(2);
        history.push(Paths[2]);
    }
    return (
        <Button
            size="small"
            onClick={onClickRoute}
            variant="contained"
            color="primary"
            disableElevation>
            {props.name}
        </Button>

    )
}