import React from 'react'

import { Typography } from '@material-ui/core';

import './Progress.css';

const Progress = ({attempt, guessList}) => {

    if (attempt === 0) {
        return (
        <Typography style={{ marginTop: '50px' }} variant="h5">
                Todavía no intentaste ninguna vez...
        </Typography>
        )
    }

    return (
        <div>
            <Typography style={{ marginTop: '50px' }} variant="h5">
                Intento Nº {attempt}
            </Typography>
            <ul className="progressBar__history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress