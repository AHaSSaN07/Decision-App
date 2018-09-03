import React from 'react';




export default class AddOption extends React.Component {

    state = {
        error: undefined
    };
    SubmitHandler = (event) => {
        event.preventDefault();
        const option = event.target.name.value.trim();
        const error = this.props.AddOptionHandler(option);
        if (error) {
            this.setState(() => ({ error }));
        }

    }

    render() {
        return (

            <div>
                {
                    this.state.error ? <div className ="add-option-error">{this.state.error}</div> : null
                }
                <form onSubmit={this.SubmitHandler}>
                    <input className="input-area" type="text" name="name" />
                    <button className="button" type="submit"> submit</button>
                </form>

            </div>
        )
    }
}