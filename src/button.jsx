import React from 'react';
// import './App.css';

class Button extends React.Component {
  render() {
    const { event, text } = this.props
    return (
      <button onClick={event}> {text}</button>
    );
  }
}

export default Button;