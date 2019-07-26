import React, { Component, Fragment } from 'react';
import Item from './Item'

class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
      const { ingredients, category } = this.props;

    return (
      <div>
        <div className="col">
          <div>
            {category}
          </div>
          <div>
          {(ingredients.map((item, idx) => <Item item={item} key={idx}/>))}
          </div>
        </div>
      </div>
    )
  }
}

export default Ingredients;