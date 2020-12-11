import React from 'react';
import '../styles/load.css';

class Loading extends React.Component {
    render() {
        return (
            <div className='load'>
                <div className='circle circle1'></div>
                <div className='circle circle2'></div>
                <div className='circle circle3'></div>
                <div className='circle circle4'></div>
                <div className='circle circle5'></div>
            </div>
        );
    }
}

export default Loading;