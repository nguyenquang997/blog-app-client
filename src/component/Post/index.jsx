/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
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
    Skeleton,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { deletePost, updatePost } from "../../api"
import { HomeContext } from "../../Context/HomeProvider";

// eslint-disable-next-line react/prop-types
function Post({ postInfo }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = anchorEl ? true : false
    const { dataApi, setDataApi } = useContext(HomeContext)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDelete = async (e) => {
        const result = await deletePost({ _id: e.target.id })
        const datas = dataApi.filter(x => x._id !== result._id)
        setAnchorEl(null)
        setDataApi(datas)
    }

    const handleUpdate = async () => {
        const result = await updatePost({ ...postInfo, likeCount: postInfo.likeCount += 1 })
        const datas = dataApi.map(x => {
            if (x._id === result._id) {
                return { ...x, likeCount: result.likeCount, updatedAt: result.updatedAt }
            } else {
                return x
            }
        })
        setDataApi(datas)
    }
    // eslint-disable-next-line react/prop-types
    return (
        <Card sx={{ textAlign: 'left' }}>
            <CardHeader
                avatar={!postInfo._id
                    ? <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    : <Avatar >R</Avatar>
                }
                title={!postInfo._id
                    ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    : postInfo?.title}
                subheader={!postInfo._id ? <Skeleton animation="wave" height={10} width="50%" /> : moment(postInfo?.updatedAt).format('HH:mm DD/MM/YYYY')}
                action={
                    <>
                        {!postInfo._id ? null : <IconButton onClick={handleOpen}  >
                            <MoreVertIcon />
                        </IconButton>}
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
            {!postInfo._id
                ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                : <CardMedia
                    component="img"
                    height="194"
                    image={postInfo?.imgURL || ''}
                    alt="Paella dish"
                />
            }
            <CardContent>
                {!postInfo._id ?
                    <>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </>
                    : <Typography variant="body2" color="text.secondary">
                        {postInfo?.content}
                    </Typography>
                }
            </CardContent>
            {!postInfo._id ? null
                : <CardActions>
                    <IconButton aria-label="add to favorites" onClick={handleUpdate} >
                        <FavoriteIcon />
                    </IconButton>
                    <Typography component='span' >{postInfo?.likeCount} Like</Typography>
                </CardActions>
            }
        </Card >
    );
}

export default Post;