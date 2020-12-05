import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import Header from './header/Header';
import Form from './form/Form';
import Cart from './cart/Cart';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  // This object will allow us to
// easily convert numbers into US dollar values
  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        
        <Header />

        <main>
          <Form 
            handleItemChange={(feature, newValue) => this.updateFeature(feature, newValue)}
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat}
          />
          <Cart 
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;
