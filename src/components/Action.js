import React from 'react';


const Action = (props) => {
    return (
        <div>
            <button className ="large-button" onClick={props.handleAction} disabled={!props.hasOptions}> What should i do?</button>
        </div>
    )
}

export default Action;
