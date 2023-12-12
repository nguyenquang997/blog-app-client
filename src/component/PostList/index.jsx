/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'
import Post from '../Post'

function PostList({ posts }) {
    return (
        <Grid container spacing={2} alignItems='stretch'>
            {posts.map((post) => {
                return (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post postInfo={post} />
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default PostList;