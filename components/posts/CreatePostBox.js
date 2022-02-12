import { Button } from '@mui/material';
import Box from './Box';

function CreatePostBox() {
    return (
        <Box>
            <div className="create-post-header">
                <div className="profile-img"></div>
                <textarea placeholder="What's on your mind, Moriaty?"></textarea>
            </div>
            <div className="line"></div>
            <Button fullWidth className="post-btn">
                Post
            </Button>
        </Box>
    );
}

export default CreatePostBox;
