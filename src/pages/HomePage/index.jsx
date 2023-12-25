import { Box, Container } from "@mui/material"

import UserMenu from '../../component/UserMenu'
import Header from '../../component/Header'
import PostList from '../../component/PostList'
import CreatePost from '../../component/CreatePost'
import HomeProvider from "../../Context/HomeProvider"


function HomePage() {

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
            <HomeProvider>
                <PostList />
                <CreatePost />
            </HomeProvider>
        </Container>
    );
}

export default HomePage;