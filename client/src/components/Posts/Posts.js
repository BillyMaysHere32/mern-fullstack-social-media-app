import React from 'react'
import { Grid, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './styles';

export default function Posts() {
  //fetch data from global redux store
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
         {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post  />
          </Grid>
        ))}
      </Grid>
    )
  )
}