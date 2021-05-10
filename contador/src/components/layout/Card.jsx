import './Card.css'

import React from 'react';

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return(
        <div className='Card' style={cardStyle}>
            <div className='Title'>{props.tiitulo}</div>
            <div className='Content'>

            </div>
        </div>
    )
}