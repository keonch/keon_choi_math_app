import React from 'react';

const OperationDashboard = (props) => {
  return (
    <div className='operation-dashboard'>
      <button onClick={props.update} value='x'>𝑥</button>
      <button onClick={props.update} value='('>(</button>
      <button onClick={props.update} value=')'>)</button>
      <button onClick={props.toggleExponent} value='^'>^</button>

      <button onClick={props.update} value='7'>7</button>
      <button onClick={props.update} value='8'>8</button>
      <button onClick={props.update} value='9'>9</button>
      <button onClick={props.update} value='/'>÷</button>

      <button onClick={props.update} value='4'>4</button>
      <button onClick={props.update} value='5'>5</button>
      <button onClick={props.update} value='6'>6</button>
      <button onClick={props.update} value='*'>×</button>

      <button onClick={props.update} value='1'>1</button>
      <button onClick={props.update} value='2'>2</button>
      <button onClick={props.update} value='3'>3</button>
      <button onClick={props.update} value='-'>-</button>

      <button onClick={props.update} value='π'>π</button>
      <button onClick={props.update} value='0'>0</button>
      <button onClick={props.update} value='.'>.</button>
      <button onClick={props.update} value='+'>+</button>
    </div>
  );
};

export default OperationDashboard;
