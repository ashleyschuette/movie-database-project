import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = { }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.formSubmit} >
                    <input
                        className="search-box"    
                        value={this.state.input}
                        type="text"
                        placeholder="Search Movie Title..."
                        onChange={this.props.inputChange} />
                </form>
            </div>
        )
    }
}

export default SearchBox;