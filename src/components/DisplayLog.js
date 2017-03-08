import React, { Component, PropTypes } from 'react';
import formatTime from '../utils/formatTime';
class DisplayLog extends Component {

  static propTypes = {
    log: PropTypes.array,
    quote: PropTypes.number
  };

  renderLog = () => {
    return this.props.log.map((time, i) => {
      return (<li className="log-item" key={i}>{formatTime(time)}</li>);
    });
  }

  renderEmpty = () => {
    let quote;
    switch (this.props.quote) {
      case 1:
        quote = "Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That's relativity.";
        break;
      case 2:
        quote = "Time is what we want most, but... what we use worst.";
        break;
      case 3:
        quote = "We must use time as a tool, not as a crutch.";
        break;
      case 4:
        quote = "A big ball of wibbly wobbly, timey wimey stuff.";
        break;
      case 5:
        quote = "Lost time is never found again.";
        break;
      default:

    }

    return <span className="empty-log">{quote}</span>;
  }

  render() {
    const log = this.props.log.length === 0 ? this.renderEmpty() : this.renderLog();
    return <ul className="Log">
      {log}
    </ul>;
  }
}
export default DisplayLog;
