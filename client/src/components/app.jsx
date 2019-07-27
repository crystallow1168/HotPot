import React, { Component, Fragment } from 'react';
import Ingredients from './Ingredients';

class App extends Component {
  constructor(props) {
    super(props) ;

    this.state = {
      data: {
        Meat: ['Beef','Chicken', 'Pork'],
        Seafood: ['Squid', 'Shrimp'],
        Vegetables: ['Cabbage', 'Corn', 'Pumpkin']
      }
    }
  }

  render() {
    const { data } = this.state;
    const category = Object.keys(data);

    return (
      <div>
        <div className="row">
          {(Object.values(data).map((ingredients, idx) => <Ingredients ingredients={ingredients} category={category[idx]} key={idx}/>))}
        </div>
      </div>
    )
  }
}

export default App;