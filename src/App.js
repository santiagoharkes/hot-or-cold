import React from 'react';

import { Grid, Typography, Paper, Divider } from '@material-ui/core'

import { generateRandomNumber } from "./util"

import Form from "./components/Form"
import Progress from "./components/Progress"

class App extends React.Component {

  state = {
    generatedNumber: generateRandomNumber(),
    guess: undefined,
    allGuess: [],
    attempt: 0,
  }

  updateAppState = (guess) => {
    const difBtw = Math.abs(guess - this.state.generatedNumber)

    this.setState(prevState => ({
      guess, 
      allGuess: [...prevState.allGuess, { guess }],
      attempt: prevState.attempt + 1
    }))
  }

  render() {

    const { allGuess, attempt } = this.state;

    const guessList = allGuess.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))

    return (
      <Grid container style={{ height: '100vh'}} justify="center" alignItems="center">
        <Grid item xs={7} lg={3}>
          <Paper style={{ padding: '50px'}} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>
              HOT or COLD
            </Typography>
            <Divider style={{ margin: '20px 0'}} />
            <Form returnGuessToApp={value => this.updateAppState(value)} />
            <Progress attempt={attempt} guessList={guessList}></Progress>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
