import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxFetch2Base64 from 'next-fetch2base64';

const CLASS_NAME = 'react-base64image';
const DATA_RE = /^data:/;

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
  };

  static defaultProps = {};
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { src } = inProps;
    this.state = { src };
  }

  componentDidMount() {
    this.update();
  }

  componentWillReceiveProps(inProps) {
    const { src } = inProps;
    if (src !== this.state.src) {
      this.state.src = src;
      this.update();
    }
  }

  update() {
    const { src } = this.state;
    if (!DATA_RE.test(src)) {
      NxFetch2Base64.request(src).then((base64) => {
        this.setState({ src: base64 });
      });
    }
  }

  render() {
    const { className, src, ...props } = this.props;
    const _src = this.state.src;
    return (
      <img
        className={classNames(CLASS_NAME, className)}
        data-original={src}
        src={_src}
        {...props}
      />
    );
  }
}
