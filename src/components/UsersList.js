import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';

class UsersList extends React.Component {

    renderUser(user) {
        return (
            <tr key={user.get('name')}>
                <td>{user.get('name')}</td>
            </tr>
        )
    }

    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        console.log(' users ', this.props.users);
        return (
            <div>
                <h4>List of users</h4>
                <table className="table">
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