import React from 'react'

import { Typography } from '@material-ui/core';

import './Progress.css';

const Progress = ({attempt, guessList}) => {
    return (
        <div>
            <Typography className="progressBar" variant="h2">
                Guess # {attempt}
            </Typography>
            <ul className="progressBar__history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress