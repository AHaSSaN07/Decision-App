
import React from 'react';

const Option = (props) => {
    const option = props.option;
    return (
        <div className="option">
           <p className ="in-option"> {props.index + 1} : {option}</p> 
            <button
                className="button button--link"
                onClick={(event) => {
                    props.delete(props.option);
                }} >Delete</button>
        </div>
    )
}

export default Option;