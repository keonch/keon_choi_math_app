import React, { Component } from 'react';
import '../stylesheets/app.css';
import '../stylesheets/display.css';

import * as AffixUtils from '../utils/affix_utils';
import * as APIUtils from '../utils/api_utils';
import OperationDashboard from './dashboard_operation';
import APIDashboard from './dashboard_api';
import Expression from './expression';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: 'simplify',
      expression: '',

      xValue: '0',
      start: '0',
      end: '0',
      base: '10',

      prefix: 'Simplify',
      exp: false,
      suffix: '',

      loading: false,
      result: ''
    };

    this.updateApi = this.updateApi.bind(this);
    this.toggleExponent = this.toggleExponent.bind(this);
    this.handleExpressionInput = this.handleExpressionInput.bind(this);
    this.deleteExpression = this.deleteExpression.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  updateApi(e) {
    const api = e.currentTarget.value;
    let pre, suf;
    switch (api) {
      case 'sin':
        [pre, suf] = AffixUtils.sin();
        break;
      case 'cos':
        [pre, suf] = AffixUtils.cos();
        break;
      case 'tan':
        [pre, suf] = AffixUtils.tan();
        break;
      case 'arcsin':
        [pre, suf] = AffixUtils.arcsin();
        break;
      case 'arccos':
        [pre, suf] = AffixUtils.arccos();
        break;
      case 'arctan':
        [pre, suf] = AffixUtils.arctan();
        break;
      case 'derive':
        [pre, suf] = AffixUtils.derivative();
        break;
      case 'integrate':
        [pre, suf] = AffixUtils.integral();
        break;
      case 'zeroes':
        [pre, suf] = AffixUtils.zeroes();
        break;
      case 'abs':
        [pre, suf] = AffixUtils.abs();
        break;
      case 'tangent':
        [pre, suf] = AffixUtils.tangent(this.state.xValue);
        break;
      case 'area':
        [pre, suf] = AffixUtils.area(this.state.start, this.state.end);
        break;
      case 'log':
        [pre, suf] = AffixUtils.log(this.state.base);
        break;
      default:
        pre = <span>{api[0].toUpperCase() + api.slice(1)}</span>;
        suf = null;
    }
    this.setState({ api, prefix: pre, suffix: suf });
  }

  toggleExponent() {
    let expression;
    if (this.state.exp) {
      const ch = this.state.expression[this.state.expression.length - 1];
      expression = ch === '[' ?
      this.state.expression.slice(0, -2) :
      this.state.expression.concat(']');
    } else {
      expression = this.state.expression.concat('^[');
    }
    this.setState({
      expression,
      exp: !this.state.exp
    });
  }

  handleExpressionInput(e) {
    this.setState({
      expression: this.state.expression.concat(e.currentTarget.value)
    });
  }

  deleteExpression() {
    const ch = this.state.expression[this.state.expression.length - 1];
    if (ch === ']') {
      this.setState({
        expression: this.state.expression.slice(0, -2),
        exp: true
      })
    } else if (ch === '[') {
      this.setState({
        expression: this.state.expression.slice(0, -2),
        exp: false
      })
    } else {
      this.setState({
        expression: this.state.expression.slice(0, -1)
      })
    }
  }

  handleSubmit() {
    let apiEndpointExpression = '';
    let prev_ch = '';
    for (let i = 0; i < this.state.expression.length; i++) {
      const ch = this.state.expression[i]
      switch (ch) {
        case '/':
          apiEndpointExpression += '(over)';
          break;
        case 'π':
          prev_ch === 'x' || prev_ch === 'π' ?
          apiEndpointExpression += '*pi' :
          apiEndpointExpression += 'pi';
          break;
        case '(':
          prev_ch === 'x' || prev_ch === 'π' ?
          apiEndpointExpression += `*(` :
          apiEndpointExpression += '(';
          break;
        case 'x':
          prev_ch === 'x' || prev_ch === 'π' ?
          apiEndpointExpression += `*x` :
          apiEndpointExpression += 'x';
          break;
        case '[':
          apiEndpointExpression += '(';
          break;
        case ']':
          apiEndpointExpression += ')';
          break;
        default:
          if (!isNaN(ch)) {
            prev_ch === 'x' || prev_ch === 'π' ?
            apiEndpointExpression += `*${ch}` :
            apiEndpointExpression += ch;
          } else {
            apiEndpointExpression += ch;
          }
      }
      if (i === this.state.expression.length - 1 && this.state.exp) {
        apiEndpointExpression += ')';
      }
      prev_ch = ch;
    }

    let apiParams = '';
    if (this.state.api === 'tangent') {
      apiParams = `${this.state.xValue}|`;
    } else if (this.state.api === 'area') {
      apiParams = `${this.state.start}:${this.state.end}|`;
    } else if (this.state.api === 'log') {
      apiParams = `${this.state.base}|`;
    }

    const url = `https://newton.now.sh/${this.state.api}/${apiParams}${apiEndpointExpression}`;
    this.setState({ loading: true });
    APIUtils.fetchNewtonAPI(url).then(
      (payload) => (this.handleResponse(payload)),
      (error) => (this.handleError(error))
    );
  }

  handleResponse(payload) {
    this.setState({
      loading: false,
      result: payload.result
    });
  }

  handleError(error) {
    console.log(error);
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="app">
        <div className='input-field'>
          <div className={`display`}>
            {this.state.prefix}
            <Expression expression={this.state.expression}/>
            {this.state.suffix}
          </div>
          <button onClick={this.deleteExpression}>Del</button>
        </div>
        <div className='dashboards'>
          <OperationDashboard
            toggleExponent={this.toggleExponent}
            exp={this.state.exp}
            update={this.handleExpressionInput}/>
          <APIDashboard
            selectedApi={this.state.api}
            update={this.updateApi}/>
        </div>
        <button onClick={this.handleSubmit}>Compute</button>
        <div className='result display'>
          {
            this.state.loading ?
            <img alt='loading' src='../images/loading.png' className='loading'/> :
            this.state.result
          }
        </div>
      </div>
    );
  }
}
