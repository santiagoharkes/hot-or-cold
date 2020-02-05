import React from 'react'

import { TextField, Button } from '@material-ui/core'

const Form = ({ returnGuessToApp }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value
        returnGuessToApp(guess)
    }

    return (
        <form style={{ marginTop: '20px'}} onSubmit={onSubmit}>
            <TextField style={{ paddingBottom: '20px'}} fullWidth type="number" name="guess" label="Colocá tu número..." required />
            <Button fullWidth variant="contained" color="primary" type="submit">¿ADIVINÉ?</Button>
        </form>
    )
}

export default Form