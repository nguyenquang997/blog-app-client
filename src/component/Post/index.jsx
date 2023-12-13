/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Menu,
    MenuItem,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { deletePost, updatePost } from "../../api"

// eslint-disable-next-line react/prop-types
function Post({ postInfo }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = anchorEl ? true : false

    const navigate = useNavigate()

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDelete = async (e) => {
        await deletePost({ _id: e.target.id })
        navigate('/')
    }

    const handleUpdate = async () => {
        await updatePost({ ...postInfo, likeCount: postInfo.likeCount += 1 })
        navigate('/')
    }
    // eslint-disable-next-line react/prop-types
    return (
        <Card sx={{ textAlign: 'left' }}>
            <CardHeader
                avatar={<Avatar >R</Avatar>}
                title={postInfo?.title}
                subheader={moment(postInfo?.updatedAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <>
                        <IconButton onClick={handleOpen}  >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={isOpen}
                        >
                            <MenuItem onClick={handleDelete} id={postInfo?._id}>Delete</MenuItem>
                        </Menu>
                    </>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={postInfo?.attachment || ''}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {postInfo?.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleUpdate} id={postInfo?._id}>
                    <FavoriteIcon />
                </IconButton>
                <Typography component='span' >{postInfo?.likeCount} Like</Typography>
            </CardActions>
        </Card>
    );
}

export default Post;