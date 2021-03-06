import React from 'react';

export const sin = () => {
  const prefix = <span>Sin(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const cos = () => {
  const prefix = <span>Cos(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const tan = () => {
  const prefix = <span>Tan(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const arcsin = () => {
  const prefix = <span className='arcsin'>Sin<sup>-1</sup>(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const arccos = () => {
  const prefix = <span className='arccos'>Cos<sup>-1</sup>(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const arctan = () => {
  const prefix = <span className='arctan'>Tan<sup>-1</sup>(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const derivative = () => {
  const suffix = (
    <span className='derivative'>
      <span>d</span>
      <span>dx</span>
    </span>
  );
  return [null, suffix];
};

export const integral = () => {
  const prefix = <span className='integral'>∫</span>;
  const suffix = <span>dx</span>;
  return [prefix, suffix];
};

export const zeroes = () => {
  const prefix = <span>0 intercepts of</span>;
  return [prefix, null];
};

export const abs = () => {
  const prefix = <span>Abs(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};

export const tangent = (xValue) => {
  const prefix = <span>Tangent of</span>;
  const suffix = <span>where x = {xValue}</span>;
  return [prefix, suffix];
};

export const area = (start, end) => {
  const prefix = (
    <span className='area-integral'>
      <span>{end}</span>
      <span className='integral'>∫</span>
      <span>{start}</span>
    </span>
  );
  const suffix = <span>dx</span>;
  return [prefix, suffix];
};

export const log = (base) => {
  const prefix = <span>log<sub>{base}</sub>(</span>;
  const suffix = <span>)</span>;
  return [prefix, suffix];
};
