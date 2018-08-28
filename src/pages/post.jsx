import React from "react";
import PropTypes from "prop-types";

const Post = ({ url }) => (
  <div>
    <h1>{url.query.title}</h1>
    <p>This is the Post</p>
  </div>
);

Post.propTypes = {
  url: PropTypes.object.isRequired
};

export default Post;
