import React from 'react';

class SearchForm extends React.Component {

    handleChange = event => {
        this.props.handleChanges(event)
    };

    render() {
        return (
            <div>
                <h3>Display your own Github profile and followers!</h3>
                <input
                    type="text"
                    value={this.props.userInput}
                    onChange={this.handleChange}
                    placeholder='enter a username'
                />
                <button onClick={this.props.fetchInfo} >Go</button>
                {this.props.userError && <p>{this.props.userError}</p>}
            </div>
        )
    }
}
export default SearchForm;