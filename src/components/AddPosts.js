import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

class AddPosts extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            term: ""
        }
    }

    onChange(event) {
        this.setState({ term: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addPost(this.state.term);
        this.setState({ term: ""});
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <input type="text"
                   placeholder="Add post"
                   onChange={this.onChange}
                   value={this.state.term}
                />
            <button type="submit" className="btn btn-default">Add Post</button>
        </form>

        )
    }

}

export default connect(null, { addPost })(AddPosts);