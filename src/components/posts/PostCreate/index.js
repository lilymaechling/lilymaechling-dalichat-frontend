/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../../generic/Button';
import './PostCreate.scss';

const PostCreate = ({
  value, onChange, onSubmit, className = '',
}) => (
  <form
    className={`post-create-container ${className}`}
    onSubmit={onSubmit}
  >
    <div className="post-create-title">New Post</div>
    <label>
      <p>Share what&apos;s on your mind!</p>
      <textarea
        placeholder="Enter your post here"
        value={value}
        onChange={onChange}
      />
    </label>

    <Button
      label="Submit Post"
      isSubmit
      type="submit"
    />
  </form>
);

export default PostCreate;
