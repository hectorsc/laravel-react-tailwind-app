import React from 'react';

const Spinner = props => {
   return (
      <div className="ui active inverted dimmer w-full pt-40">
         <div className="ui large text loader relative">{props.message}</div>
      </div>
   );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
