import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Aux>
          <div>Burger</div>
          <div>Build controls</div>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;
