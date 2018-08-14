import React from 'react';

const Expression = (props) => {
  const expressionArr = [];
  let exponent = false;
  let exponentString = '';
  for (let i = 0; i < props.expression.length; i++) {
    const ch = props.expression[i];
    if (ch === '^') {
      exponent = true;
    } else if (ch === '[') {
      continue;
    } else if (ch === ']') {
      expressionArr.push(<sup key={i}>{exponentString}</sup>);
      exponentString = '';
      exponent = false;
    } else if (exponent) {
      exponentString += ch;
      if (i === props.expression.length - 1) {
        expressionArr.push(<sup key={i}>{exponentString}</sup>);
      }
    } else {
      expressionArr.push(ch);
    }
  }

  return (
    <div className='expression'>
      {expressionArr}
    </div>
  );
};

export default Expression;
