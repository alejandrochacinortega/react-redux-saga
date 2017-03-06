import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class UsersList extends React.Component {

    renderUser(user) {
        return (
            <p key={user.get('name')}>{user.get('name')}</p>
        )
    }
    
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        console.log(' users ', this.props.users);  
        return (
            <div>
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);