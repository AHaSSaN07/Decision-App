import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './components/styles/styles.scss';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import OptionModal from './components/OptionModal';

class App extends Component {

  state = {
    OOptions: [],
    selectedOption: undefined
  };

  ActionbuttonHandler = () => {
    let index = Math.floor(Math.random() * this.state.OOptions.length)
    //alert(this.state.OOptions[index]);
    this.setState(() => {
      return {
        selectedOption: this.state.OOptions[index]
      }
    })
  }

  OkayHandler = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    })
  }



  handleDelete = () => {
    this.setState(() => ({ OOptions: [] }));
  }
  DeleteItemHandler = (optionToRemove) => {
    let index = this.state.OOptions.indexOf(optionToRemove);

    this.setState((prevState) => {
      return {
        OOptions: prevState.OOptions.filter((option) => {
          return option !== optionToRemove;
        })
      };
    })
    //console.log("sklam" , option);
  }


  AddOptionHandler = (option) => {
    if (!option) {
      return "enter a vlid option";
    }
    else if (this.state.OOptions.indexOf(option) > -1) {
      return "option already exist";
    }

    this.setState((prevState) => {
      return {
        OOptions: prevState.OOptions.concat([option])
      };
    })
  }

  title = "Decision App";

  subtitle = "Put your options to ranodmly selsect one!";

  componentDidMount() {

    try {
      if (JSON.parse(localStorage.getItem("options"))) {
        this.setState(() => {
          return {
            OOptions: JSON.parse(localStorage.getItem("options"))
          }
        })
      }
    }
    catch (e) {
      console.log("unhandled excpteion");
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.OOptions.length !== this.state.OOptions.length) {
      const json = JSON.stringify(this.state.OOptions);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }

  render() {
    return (
      <div >
        <Header title={this.title} subtitle={this.subtitle}></Header>
        <div className="container">
          <Action
            hasOptions={this.state.OOptions.length > 0}
            handleAction={this.ActionbuttonHandler}
          >
          </Action>
          <div className ="widgit">
          <Options
            options={this.state.OOptions}
            handleDelete={this.handleDelete}
            handleDeleteItem={this.DeleteItemHandler}
          >
          </Options>
          <AddOption
            AddOptionHandler={this.AddOptionHandler}
          >
          </AddOption>
          </div>
        </div>
        <OptionModal
          OkayHandler={this.OkayHandler}
          selectedOption={this.state.selectedOption}
        ></OptionModal>
      </div>
      // <div>
      //   <VisabilityToggle></VisabilityToggle>
      // </div>
    );

  }
}
export default App;