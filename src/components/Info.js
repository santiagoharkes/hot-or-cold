import React from "react";

import { Button, DialogTitle, Dialog, DialogContent } from "@material-ui/core";

class Info extends React.Component {
  state = { open: false };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Reglas del juego:</DialogTitle>
          <DialogContent>
            Este es un juego en donde tenés que adivinar el número:
            <ol>
              <li>
                La súper Robotina va a elegir un número entre el 1 y el 100 y lo mantiene en secreto.
              </li>
              <li>
                Vos tenés que intentar adivinar el número que eligió Robotina!
              </li>
              <li>
                Como Robotina es la mejor, te va a tirar pistas de qué tan lejos o cerca estés de acertar. Mientras más lejos, más frío. Mientras más cerca, más caliente.
              </li>
            </ol>
            ¿Estás listo?
          </DialogContent>
          <Button onClick={this.handleToggle}>¡Quiero jugar YA!</Button>
        </Dialog>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.handleToggle}
        >
          ¿Cómo se juega?
        </Button>
      </React.Fragment>
    );
  }
}

export default Info;
