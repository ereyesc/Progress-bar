import * as React from 'react';
import ProgressBar from './ProgressBar';
import './style.css';

export default () => {
  const [width, setWidth] = React.useState<number>(0);

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setWidth(Number(e.currentTarget.value));

  return (
    <div className="App">
      <h1>Progress Bar!</h1>
      <ProgressBar width={width} />
      <label>Input percentage: </label>
      <input type="number" max={100} value={width} onChange={onChange} />
    </div>
  );
};
