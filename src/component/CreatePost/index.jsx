import { useContext, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { Modal, Box, Typography, Fab, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { createPost } from '../../api/'
import { HomeContext } from '../../Context/HomeProvider';

function CreatePost() {
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: '',
    });

    const [open, setOpen] = useState(false);

    const { dataApi, setDataApi } = useContext(HomeContext)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleCreatePost = async () => {
        const result = await createPost(data)
        if (!result?._id) {
            alert('Create Faill')
            return
        }
        alert('Create Success')
        setOpen(false)
        setData({
            title: '',
            content: '',
            attachment: '',
        })

        setDataApi([...dataApi, result])
    }

    return (
        <>
            <Fab
                onClick={handleOpen}
                color="primary"
                style={{ position: 'fixed', bottom: '2px', right: '2px' }}
            >
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Post
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            sx={{ marginBottom: '10px' }}
                            variant="standard"
                            label="Title"
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                        />
                        <TextField
                            fullWidth
                            sx={{ marginBottom: '10px' }}
                            label="Content"
                            multiline
                            rows={4}
                            value={data.content}
                            onChange={(e) => setData({ ...data, content: e.target.value })}
                        />
                        <FileBase64
                            multiple={true}
                            onDone={(img) => setData({ ...data, attachment: img[0].base64, imgPart: img[0].name })}
                        />
                        <div style={{ marginTop: '20px' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleCreatePost}
                            >
                                Create
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default CreatePost;