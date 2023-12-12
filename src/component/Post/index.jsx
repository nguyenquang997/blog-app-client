/* eslint-disable react/prop-types */
import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";

// eslint-disable-next-line react/prop-types
function Post({ postInfo }) {
    // eslint-disable-next-line react/prop-types
    return (
        <Card sx={{ textAlign: 'left' }}>
            <CardHeader
                avatar={<Avatar >R</Avatar>}
                title={postInfo?.title}
                subheader={moment(postInfo?.updatedAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Typography component='span' >{postInfo?.likeCount} Like</Typography>
            </CardActions>
        </Card>
    );
}

export default Post;