import Modal from 'react-modal';
import React, { Component}  from 'react';

const OptionModal = (props) =>
    (
       <Modal
       isOpen = {!!props.selectedOption}
       contentLabel = "option"
       onRequestClose = {props.OkayHandler} 
       closeTimeoutMS = {200}
       className ="modal"
       >
           <h3>selected option : {props.selectedOption}</h3>
           <button onClick = {props.OkayHandler}>Okay</button>
       </Modal>
    )



export default OptionModal;