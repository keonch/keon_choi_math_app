import React from 'react';
import '../stylesheets/dashboard.css';

const APIDashboard = (props) => {
  return (
    <div className='api-dashboard'>
      <button
        className={`api ${props.selectedApi === 'simplify' && 'selected'}`}
        onClick={props.update}
        value='simplify'>
        Simplify
      </button>
      <button
        className={`api ${props.selectedApi === 'derive' && 'selected'}`}
        onClick={props.update}
        value='derive'>
        Derive
      </button>
      <button
        className={`api ${props.selectedApi === 'abs' && 'selected'}`}
        onClick={props.update}
        value='abs'>
        Absolute Value
      </button>

      <button
        className={`api ${props.selectedApi === 'factor' && 'selected'}`}
        onClick={props.update}
        value='factor'>
        Factor
      </button>
      <button
        className={`api ${props.selectedApi === 'integrate' && 'selected'}`}
        onClick={props.update}
        value='integrate'>
        Integrate
      </button>
      <button
        className={`api ${props.selectedApi === 'zeroes' && 'selected'}`}
        onClick={props.update}
        value='zeroes'>
        Find 0 Intercepts
      </button>

      <button
        className={`api ${props.selectedApi === 'sin' && 'selected'}`}
        onClick={props.update}
        value='sin'>
        Sine
      </button>
      <button
        className={`api ${props.selectedApi === 'arcsin' && 'selected'}`}
        onClick={props.update}
        value='arcsin'>
        Inverse Sine
      </button>
      <button
        className={`api ${props.selectedApi === 'tangent' && 'selected'}`}
        onClick={props.update}
        value='tangent'>
        Find Tangent
        {
          props.selectedApi === 'tangent' &&
          <div className='param-input'>
            <label>x = </label>
            <input
              onChange={props.updateApiParams('xValue')}
              value={props.xValue}/>
          </div>
        }
      </button>

      <button
        className={`api ${props.selectedApi === 'cos' && 'selected'}`}
        onClick={props.update}
        value='cos'>
        Cosine
      </button>
      <button
        className={`api ${props.selectedApi === 'arccos' && 'selected'}`}
        onClick={props.update}
        value='arccos'>
        Inverse Cosine
      </button>
      <button
        className={`api ${props.selectedApi === 'area' && 'selected'}`}
        onClick={props.update}
        value='area'>
        Area Under Curve
        {
          props.selectedApi === 'area' &&
          <div className='param-input'>
            <label>start = </label>
            <input
              onChange={props.updateApiParams('start')}
              value={props.start}/>
            <label>end = </label>
            <input
              onChange={props.updateApiParams('end')}
              value={props.end}/>
          </div>
        }
      </button>

      <button
        className={`api ${props.selectedApi === 'tan' && 'selected'}`}
        onClick={props.update}
        value='tan'>
        Tangent
      </button>
      <button
        className={`api ${props.selectedApi === 'arctan' && 'selected'}`}
        onClick={props.update}
        value='arctan'>
        Inverse Tangent
      </button>
      <button
        className={`api ${props.selectedApi === 'log' && 'selected'}`}
        onClick={props.update}
        value='log'>
        Log
        {
          props.selectedApi === 'log' &&
          <div className='param-input'>
            <label>base = </label>
            <input
              onChange={props.updateApiParams('base')}
              value={props.base}/>
          </div>
        }
      </button>
    </div>
  );
};

export default APIDashboard;
