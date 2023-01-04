import * as React from 'react';
export default (props: { width: number }) => {
  return (
    <div className="container">
      {props.width >= 0 && props.width <= 100 && (
        <div
          className="innerContainer"
          style={{ width: `${props.width}%` }}
        ></div>
      )}
    </div>
  );
};
