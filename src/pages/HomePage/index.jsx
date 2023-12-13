import { useLoaderData } from "react-router-dom"
import { Box, Container } from "@mui/material"

import UserMenu from '../../component/UserMenu'
import Header from '../../component/Header'
import PostList from '../../component/PostList'
import CreatePost from '../../component/CreatePost'


function HomePage() {
    const data = useLoaderData()

    return (
        <Container maxWidth='lg'>
            <Header />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    margin: '10px 0px'
                }}
            >
                <UserMenu />

            </Box>
            <PostList posts={data} />
            <CreatePost />

        </Container>
    );
}

export default HomePage;