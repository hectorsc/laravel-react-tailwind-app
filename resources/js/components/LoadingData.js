import React from 'react';

const LoadingData = props => {
   return (
      <div className="ui segment flex justify-center" style={style(props)}>
         <div className="ui active inverted dimmer">
            <div className={`ui ${props.type} text loader relative`}>{props.message}</div>
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
         return {padding: '20px'}
   }
}

LoadingData.defaultProps = {
  message: 'Loading...',
  type: 'small',
};

export default LoadingData;
