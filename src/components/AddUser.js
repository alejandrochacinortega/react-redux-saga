import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

class AddUser extends React.Component {

    render() {
        return (
            <button onClick={() => this.props.addUser()} className="btn btn-default">Add User</button>
        )
    }

}

export default connect(null, { addUser })(AddUser);