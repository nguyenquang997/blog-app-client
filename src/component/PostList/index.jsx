/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Grid } from '@mui/material'
import Post from '../Post'
import { HomeContext } from '../../Context/HomeProvider';

function PostList() {
    const { dataApi } = useContext(HomeContext)

    return (
        <Grid container spacing={2} alignItems='stretch'>
            {dataApi.map((post, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6}>
                        <Post postInfo={post} />
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default PostList;