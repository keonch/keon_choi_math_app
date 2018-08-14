import React, { Component } from 'react';
import '../stylesheets/display.css';

import * as AffixUtils from '../utils/affix_utils';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: props.api,
      suffix: ''
    };

    this.parseExpression = this.parseExpression.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    let prefix, suffix;
    switch (props.api) {
      case 'Sin':
        [prefix, suffix] = AffixUtils.sin();
        break;
      case 'Cos':
        [prefix, suffix] = AffixUtils.cos();
        break;
      case 'Tan':
        [prefix, suffix] = AffixUtils.tan();
        break;
      case 'Arcsin':
        [prefix, suffix] = AffixUtils.arcsin();
        break;
      case 'Arccos':
        [prefix, suffix] = AffixUtils.arccos();
        break;
      case 'Arctan':
        [prefix, suffix] = AffixUtils.arctan();
        break;
      case 'Derive':
        [prefix, suffix] = AffixUtils.derivative();
        break;
      case 'Integrate':
        [prefix, suffix] = AffixUtils.integral();
        break;
      case 'Abs':
        [prefix, suffix] = AffixUtils.abs();
        break;
      case 'Tangent':
        [prefix, suffix] = AffixUtils.tangent(props.xValue);
        break;
      case 'Area':
        [prefix, suffix] = AffixUtils.area(props.start, props.end);
        break;
      case 'Log':
        [prefix, suffix] = AffixUtils.log(props.base);
        break;
      default:
        prefix = <span>{props.api}</span>;
        suffix = null;
    }
    return ({ prefix, suffix });
  }

  parseExpression() {
    console.log(this.props.expression);
    let prev_ch;
    for (let i = 0; i < this.props.expression.length; i++) {

      prev_ch = this.props.expression[i];
    }
    return (
      <div className='expression'>
        exp
      </div>
    );
  }

  render() {
    const expression = this.parseExpression();
    return (
      <div className={`display ${this.props.api}`}>
        <div>{this.state.prefix}</div>
        {expression}
        <div>{this.state.suffix}</div>
      </div>
    );
  }
}
