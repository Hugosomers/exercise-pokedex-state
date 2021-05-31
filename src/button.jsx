import React from 'react';
import './button.css'
// import './App.css';

class Button extends React.Component {
  render() {
    const { event, text, disable, className } = this.props
    return (
      <button onClick={event} disabled={disable} className={className}> {text}</button>
    );
  }
}

export default Button;