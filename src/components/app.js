import React, { Component } from 'react';
import '../stylesheets/app.css';

import OperationDashboard from './dashboard_operation';
import APIDashboard from './dashboard_api';
import Display from './display';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      api: 'Simplify',
      xValue: '0',
      start: '0',
      end: '0',
      base: '10',
      exponent: false
    };

    this.update = this.update.bind(this);
    this.toggleExponent = this.toggleExponent.bind(this);
    this.updateExpression = this.updateExpression.bind(this);
  }

  update(state) {
    return (e) => (
      this.setState({
        [state]: e.currentTarget.value
      })
    );
  }

  toggleExponent() {
    let expression = this.state.expression;
    if (this.state.exponent) {
      expression += ']';
    } else {
      expression += '^['
    }

    this.setState({
      exponent: !this.state.exponent,
      expression
    });
  }

  updateExpression(e) {
    const value = e.currentTarget.value;
    let expression = this.state.expression;

    expression += value;

    this.setState({
      expression
    })
  }

  render() {
    return (
      <div className="app">
        <OperationDashboard
          toggleExponent={this.toggleExponent}
          update={this.updateExpression}/>
        <APIDashboard update={this.update}/>
        <Display
          xValue={this.state.xValue}
          start={this.state.start}
          end={this.state.end}
          base={this.state.base}
          api={this.state.api}
          expression={this.state.expression}/>
      </div>
    );
  }
}
