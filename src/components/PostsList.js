import React from 'react';
import { connect } from 'react-redux';

class PostsList extends React.Component {

    renderPosts(post, index) {
        console.log(' post ', post);
        return (
            <tr key={index}>
                <td>{post.get('name')}</td>
            </tr>
        )
    }

    noPost() {
        return (
            <tr>
                <td>Add a new post</td>
            </tr>
        )
    }

    render() {
        let areTherePosts = this.props.posts.toJS().length > 0;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                { areTherePosts ? this.props.posts.map(this.renderPosts) : this.noPost()}
                </tbody>
            </table>
        )
    }

}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList);