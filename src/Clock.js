import React from 'react'

const Clock = (props) => {
    
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
    
}
// setInterval(Apptick,1000);
export default Clock
