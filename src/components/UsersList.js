import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';

class UsersList extends React.Component {

    renderUser(user, index) {
        return (
            <tr key={index}>
                <td>{user.get('name')}</td>
            </tr>
        )
    }

    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <h4>List of users</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map(this.renderUser)}
                    </tbody>
                </table>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);