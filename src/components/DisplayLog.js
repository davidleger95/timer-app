import React, { Component, PropTypes } from 'react';
import formatTime from '../utils/formatTime';
class DisplayLog extends Component {
  static propTypes = {
    log: PropTypes.array
  };

  renderLog = () => {
    return this.props.log.map((time, i) => {
      return (<li className="log-item" key={i}>{formatTime(time)}</li>);
    });
  }

  render() {
    const log = this.renderLog();
    return <ul className="Log">
      {log}
    </ul>;
  }
}
export default DisplayLog;
