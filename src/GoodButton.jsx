import React from 'react';

class GoodButton extends React.Component {
  handleClick(event) {
    console.log(event.target.textContent);
    alert('Good job!');
  }
  render() {
    return(
    <button 
      className="fancy-button"
      onClick={event => this.handleClick(event)}
    >
      Click me!
    </button>
    );
  }
}


export default GoodButton;