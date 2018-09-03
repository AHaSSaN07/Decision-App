
import React from 'react';
import Option from './Option';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const Options = (props) => {
    return (
        <div>
            <div className ="widget-header" >
                <h3 className="widget-header--h3">Your Options</h3>
                <button className="button button--link" onClick={props.handleDelete}>Remove All </button>
            </div>
            <div>
                {
                    props.options.length === 0 ? <p className ="widget-messege">enter options to start</p> :
                        props.options.map((option,index) => <Option  index ={index} option={option} delete={props.handleDeleteItem}></Option>)
                }
            </div>
        </div>
    )
}

export default Options;
