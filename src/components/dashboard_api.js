import React from 'react';

const APIDashboard = (props) => {
  return (
    <div className='api-dashboard'>
      <button onClick={props.update('api')} value='Simplify'>Simplify</button>
      <button onClick={props.update('api')} value='Derive'>Derive</button>
      <button onClick={props.update('api')} value='Abs'>Absolute Value</button>
      <button onClick={props.update('api')} value='Factor'>Factor</button>
      <button onClick={props.update('api')} value='Integrate'>Integrate</button>
      <button onClick={props.update('api')} value='Find 0 Intercepts'>Find 0 Intercepts</button>
      <button onClick={props.update('api')} value='Sin'>Sine</button>
      <button onClick={props.update('api')} value='Arcsin'>Inverse Sine</button>
      <button onClick={props.update('api')} value='Tangent'>Find Tangent</button>
      <button onClick={props.update('api')} value='Cos'>Cosine</button>
      <button onClick={props.update('api')} value='Arccos'>Inverse Cosine</button>
      <button onClick={props.update('api')} value='Area'>Area Under Curve</button>
      <button onClick={props.update('api')} value='Tan'>Tangent</button>
      <button onClick={props.update('api')} value='Arctan'>Inverse Tangent</button>
      <button onClick={props.update('api')} value='Log'>Log</button>
    </div>
  );
};

export default APIDashboard;
