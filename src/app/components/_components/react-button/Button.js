import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';

import Ripple from '../Ripple';

class Button extends Component {
  render() {
    const { type, size, children, onClick } = this.props;
    const cls = classnames({
      'x-button': true,
      'x-button-default': type === 'default',
      [`x-button-${type}`]: type,
      [`x-button-size-${size}`]: size,
      'x-transition-base': true,
    });
    return (
      <button
        type="button"
        className={cls}
        onClick={onClick}
      >
        {children}
        <Ripple overHidden centerMode={false} rippleColor="#f44336" size="default" />
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'default',
  size: 'default',
  children: 'Button',
  onClick: () => {}
};

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'outline']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
