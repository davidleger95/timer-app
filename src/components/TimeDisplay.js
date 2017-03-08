import React, { Component, PropTypes } from 'react';
import DisplayLog from './DisplayLog';
import Button from './Button';
import formatTime from '../utils/formatTime';

class TimeDisplay extends Component {
  static propTypes = {
    time: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      on: false,
      log: [],
      quote: Math.floor((Math.random() * 5) + 1)
    };
    this.timer;
  }

  componentDidMount() {
    this.keyCommands();
  }

  componentWillUnmount() {
    window.removeEventListener('keyup');
    window.removeEventListener('keydown');
  }

  keyCommands = () => {
    window.addEventListener('keydown', e => e.preventDefault());
    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      //alert(e.keyCode);
      switch (e.keyCode) {
        case 32:  // Space
          this.toggleOn();
          break;
        case 82: // R
          this.resetTime();
          break;
        case 76:  // L
          this.logTime();
          break;
        case 13:  // Enter
          this.logTime();
          break;
        default:
          return;
      }
    })
  }

  logTime = (newTime) => {
    this.setState({ log: [this.state.time, ...this.state.log] });
  }

  clearLog = () => this.setState({ log: [], quote: Math.floor((Math.random() * 5) + 1) });

  toggleOn = () => {
    if (this.state.on) clearInterval(this.timer);
    else this.timer = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 10);

    this.setState({
      on: !this.state.on
    });
  }

  resetTime = () => this.setState({
    time: 0,
    quote: Math.floor((Math.random() * 5) + 1)
  });

  renderControls = () => {
    return (
      <div className="controls">
        <Button
          onClick={this.toggleOn}
          className={this.state.on ? 'danger' : 'success'}
          text={this.state.on ? 'Stop' : 'Start'}
        />
        <Button
          onClick={this.resetTime}
          className="warning"
          text="Reset"
        />
        <Button
          onClick={this.logTime}
          className="primary"
          text="Log Time"
        />
        <Button
          onClick={this.clearLog}
          text="Clear Log"
        />
      </div>
    );
  }
  render() {
    const time = formatTime(this.state.time);
    const controls = this.renderControls();
    return <div className="TimeDisplay">
      <div className="timer">
        <h1 className="display-time">{time}</h1>
        {controls}
      </div>
      <DisplayLog log={this.state.log} quote={this.state.quote} />

    </div>;
  }
}

export default TimeDisplay;
