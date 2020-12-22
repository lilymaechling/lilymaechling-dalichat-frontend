/* eslint-disable react/sort-comp */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { generateFrontendErrorMessage } from '../../constants';

import ActionTypes from '../../state/actions';
import { createErrorSelector, createLoadingSelector } from '../../state/actions/requestActions';
import {
  fetchPosts, createPost, fetchPostById, updatePostById, deletePostById,
} from '../../state/actions/postActions';
import {
  fetchUsers, createUser, fetchUserById, updateUserById, deleteUserById,
} from '../../state/actions/userActions';

import Post from '../Post';

// TODO: Update this panel to support new fields
class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id_get: '',
      post_id_get: '',

      user_first_name_create: '',
      user_last_name_create: '',
      user_email_create: '',
      user_password_create: '',

      user_id_create: '',
      user_first_name_update: '',
      user_last_name_update: '',
      user_email_update: '',
      user_password_update: '',

      post_title_create: '',
      post_description_create: '',
      post_value_create: '',

      post_id_update: '',
      post_title_update: '',
      post_description_update: '',
      post_value_update: '',
    };

    this.getAllUsers = this.getAllUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.getAllPosts = this.getAllPosts.bind(this);
    this.createPost = this.createPost.bind(this);
    this.getPostById = this.getPostById.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  // User handler functions

  getAllUsers(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.fetchUsers();
  }

  createUser(e, firstName, lastName, email, password) {
    e.preventDefault();
    e.stopPropagation();

    this.props.createUser(firstName, lastName, email, password);
  }

  getUserById(e, id) {
    e.preventDefault();
    e.stopPropagation();

    if (id) { this.props.fetchUserById(id); }
  }

  updateUser(e, id, update) {
    e.preventDefault();
    e.stopPropagation();

    if (id) { this.props.updateUserById(id, update); }
  }

  deleteUser(e, id) {
    e.preventDefault();
    e.stopPropagation();

    if (id) { this.props.deleteUserById(id); }
  }

  // Post handler functions

  getAllPosts(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.fetchPosts();
  }

  getPostById(e, id) {
    e.preventDefault();
    e.stopPropagation();

    if (id) { this.props.fetchPostById(id); }
  }

  updatePost(e, id, update) {
    e.preventDefault();
    e.stopPropagation();

    if (id) { this.props.updatePostById(id, update); }
  }

  createPost(e, title, description, value) {
    e.preventDefault();
    e.stopPropagation();

    this.props.createPost(title, description, value);
  }

  deletePost(e, id) {
    e.preventDefault();
    e.stopPropagation();

    if (id) { this.props.deletePostById(id); }
  }

  // NOTE: Form inputs not validated in frontend
  render() {
    return (
      <div>
        <div>Welcome to the admin panel!</div>
        <NavLink to="/signout">Sign Out</NavLink>
        <br /><br />

        {/* Container for main user/post flex box */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>

          {/* Post Container */}
          <div style={{ width: '400px' }}>

            {/* High-level Post Operations */}
            <button type="button" onClick={this.getAllPosts}>Get All Posts</button><br /><br />

            <input type="text" placeholder="Post ID" value={this.state.post_id_get} onChange={(e) => this.setState({ post_id_get: e.target.value })} /><br />
            <button type="button" onClick={(e) => this.getPostById(e, this.state.post_id_get)}>Get Post</button><br />
            <button type="button" onClick={(e) => this.deletePost(e, this.state.post_id_get)}>Delete Post</button><br />

            {/* Create Post Form */}
            <p><b>Create Post</b></p>
            <form onSubmit={(e) => this.createPost(
              e, this.state.post_title_create, this.state.post_description_create, this.state.post_value_create,
            )}
            >
              <input type="text" placeholder="Title" value={this.state.post_title_create} onChange={(e) => this.setState({ post_title_create: e.target.value })} /><br />
              <input type="text" placeholder="Content" value={this.state.post_description_create} onChange={(e) => this.setState({ post_description_create: e.target.value })} /><br />
              <input type="text" placeholder="Likes" value={this.state.post_value_create} onChange={(e) => this.setState({ post_value_create: e.target.value })} /><br />
              <input type="date" placeholder="Posted Date" value={this.state.post_value_create} onChange={(e) => this.setState({ post_value_create: e.target.value })} /><br />
              <input type="submit" value="Create Post" />
            </form>
            <br />

            {/* Update Post Form */}
            <p><b>Update Post</b></p>

            <form onSubmit={(e) => this.updatePost(
              e, this.state.post_id_update,
              {
                title: this.state.post_title_update || undefined,
                description: this.state.post_description_update || undefined,
                value: this.state.post_value_update || undefined,
              },
            )}
            >
              <input type="text" placeholder="Post ID" value={this.state.post_id_update} onChange={(e) => this.setState({ post_id_update: e.target.value })} /><br />
              <input type="text" placeholder="Title" value={this.state.post_title_update} onChange={(e) => this.setState({ post_title_update: e.target.value })} /><br />
              <input type="text" placeholder="Description" value={this.state.post_description_update} onChange={(e) => this.setState({ post_description_update: e.target.value })} /><br />
              <input type="text" placeholder="Value" value={this.state.post_value_update} onChange={(e) => this.setState({ post_value_update: e.target.value })} /><br />
              <input type="submit" value="Update Post" />
            </form>

            {/* Shows result of fetchPosts() action */}
            <p><b>Posts:</b></p>
            <div>{this.props.postIsLoading ? 'Loading data...'
              : (generateFrontendErrorMessage(this.props.postErrorMessage)
              || Object.values(this.props.posts).map((element) => (
                <Post
                  key={element.id || element._id}
                  title={element.title}
                  content={element.content}
                  likes={element.numLikes}
                  postDate={element.postDate}
                />
              )))}
            </div>
          </div>

          {/* Spacer */}
          <div style={{ width: '200px' }} />

          {/* User Container */}
          <div style={{ width: '400px' }}>

            {/* High-level User Operations */}
            <button type="button" onClick={this.getAllUsers}>Get All Users</button><br /><br />

            <input type="text" placeholder="User ID" value={this.state.user_id_get} onChange={(e) => this.setState({ user_id_get: e.target.value })} /><br />
            <button type="button" onClick={(e) => this.getUserById(e, this.state.user_id_get)}>Get User</button><br />
            <button type="button" onClick={(e) => this.deleteUser(e, this.state.user_id_get)}>Delete User</button>
            <br />

            {/* Create User Form */}
            <p><b>Create User</b></p>
            <form onSubmit={(e) => this.createUser(
              e,
              this.state.user_first_name_create,
              this.state.user_last_name_create,
              this.state.user_email_create,
              this.state.user_password_create,
            )}
            >
              <input type="text" placeholder="First Name" value={this.state.user_first_name_create} onChange={(e) => this.setState({ user_first_name_create: e.target.value })} /><br />
              <input type="text" placeholder="Last Name" value={this.state.user_last_name_create} onChange={(e) => this.setState({ user_last_name_create: e.target.value })} /><br />
              <input type="email" placeholder="Email" value={this.state.user_email_create} onChange={(e) => this.setState({ user_email_create: e.target.value })} /><br />
              <input type="password" placeholder="Password" value={this.state.user_password_create} onChange={(e) => this.setState({ user_password_create: e.target.value })} /><br />
              <input type="submit" value="Create User" />
            </form>

            {/* Update User Form */}
            <p><b>Update User</b></p>

            <form onSubmit={(e) => this.updateUser(
              e, this.state.user_id_create,
              {
                first_name: this.state.user_first_name_update || undefined,
                last_name: this.state.user_last_name_update || undefined,
                email: this.state.user_email_update || undefined,
                password: this.state.user_password_update || undefined,
              },
            )}
            >
              <input type="text" placeholder="User ID" value={this.state.user_id_create} onChange={(e) => this.setState({ user_id_create: e.target.value })} /><br />
              <input type="text" placeholder="First Name" value={this.state.user_first_name_update} onChange={(e) => this.setState({ user_first_name_update: e.target.value })} /><br />
              <input type="text" placeholder="Last Name" value={this.state.user_last_name_update} onChange={(e) => this.setState({ user_last_name_update: e.target.value })} /><br />
              <input type="email" placeholder="Email" value={this.state.user_email_update} onChange={(e) => this.setState({ user_email_update: e.target.value })} /><br />
              <input type="password" placeholder="Password" value={this.state.user_password_update} onChange={(e) => this.setState({ user_password_update: e.target.value })} /><br />
              <input type="submit" value="Update User" />
            </form>

            {/* Shows result of fetchUsers() action */}
            <p><b>Users:</b></p>
            <div>
              {this.props.userIsLoading ? 'Loading data...'
                : (generateFrontendErrorMessage(this.props.userErrorMessage)
                || Object.values(this.props.users).map((element) => (
                  <Post
                    key={element.id || element._id}
                    title={element.title}
                    content={element.content}
                    likes={element.numLikes}
                    postDate={element.postDate}
                  />
                )))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const userSelectorActions = [ActionTypes.FETCH_USER, ActionTypes.FETCH_USERS, ActionTypes.DELETE_USER];
const postSelectorActions = [ActionTypes.FETCH_POST, ActionTypes.FETCH_POSTS, ActionTypes.DELETE_POST];

const mapStateToProps = (state) => ({
  postIsLoading: createLoadingSelector(postSelectorActions)(state),
  postErrorMessage: createErrorSelector(postSelectorActions)(state),
  userIsLoading: createLoadingSelector(userSelectorActions)(state),
  userErrorMessage: createErrorSelector(userSelectorActions)(state),

  posts: state.post.posts,
  users: state.auth.users,
});

export default connect(mapStateToProps, {
  fetchPosts, createPost, fetchPostById, updatePostById, deletePostById, fetchUsers, createUser, fetchUserById, updateUserById, deleteUserById,
})(AdminPanel);
