import React from 'react';

const LoadingData = props => {
   return (
      <div className="ui segment" style={style(props)}>
         <div className="ui active inverted dimmer">
            <div className={`ui ${props.type} text loader`} style={{ top: '41%'}}>{props.message}</div>
         </div>
         <p></p>
      </div>
   );
};

const style = props => {
   switch (props.type) {
      case 'mini':
         return {padding: '20px'}
      case 'big':
         return {padding: '40px'}
      default:
         return {padding: '50px'}
   }
}

LoadingData.defaultProps = {
  message: 'Loading...',
  type: 'small',
};

export default LoadingData;
