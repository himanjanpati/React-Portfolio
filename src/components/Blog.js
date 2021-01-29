import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import './blog.css';

function Blog() {

  return (
    <div className="blogpage">
      <CircularProgress />
      <div className="working">
      <Typography>Working on it...</Typography>
      </div>
    </div>
  );
}

export default Blog;