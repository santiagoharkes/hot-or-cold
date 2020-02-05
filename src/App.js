import React from 'react';

import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core'

import Form from "./components/Form"
import Progress from "./components/Progress"
import Info from "./components/Info"
import { getInitialState, getFeedback } from "./util"

import './App.css'

class App extends React.Component {

  state = getInitialState()

  resetGame = () => this.setState(getInitialState())

  updateAppState = (guess) => {
    const { actual } = this.state

    const difBtw = Math.abs(guess - actual)

    const { feedbackMessage, feedbackColor, feedbackCode } = getFeedback(difBtw)

    this.setState(prevState => ({
      guess, 
      allGuess: [...prevState.allGuess, { guess, feedbackColor }],
      attempt: prevState.attempt + 1,
      feedbackMessage,
      feedbackCode,
      // block: difBtw === 0,
    }))
    console.log(actual)
  }
  
  render() {

    const { allGuess, attempt, feedbackMessage, show, feedbackCode } = this.state;

    const guessList = allGuess.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))

    return (
      <Grid
        container
        style={{ height: "100vh" }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} lg={3}>
          <Paper style={{ padding: "50px" }} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>
              HOT or COLD
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <div className={`feedback ${feedbackCode}`}>
              <h2 className="feedback-text">{feedbackMessage}</h2>
            </div>
            <Form
              // block={block}
              returnGuessToApp={value => this.updateAppState(value)}
            />
            <Progress
              feedbackMessage={feedbackMessage}
              attempt={attempt}
              guessList={guessList}
            ></Progress>
            <Button
              style={{ marginBottom: "15px", marginTop: "20px" }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.resetGame}
            >
              Reset Game
            </Button>
            <Info show={show} onClose={this.handleClose}></Info>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
