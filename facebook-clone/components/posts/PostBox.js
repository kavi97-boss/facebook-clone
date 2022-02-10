import Link from 'next/link';
import Box from './Box';
import LikeIcon from '@material-ui/icons/ThumbUp';
import LikeBtnIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

function PostBox() {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <Box>
            <div className="post-head-line">
                <div className="head-image"></div>
                <div className="head-name-and-time">
                    <Link href="/profile/[id]" as={'/profile/1231'}>
                        Profile Name
                    </Link>
                    <p>February 8 at 9:04 AM</p>
                </div>
            </div>
            <div className="post-image"></div>
            <div className="likes-line">
                <div className="like-round">
                    <LikeIcon />
                </div>
                <p>10</p>
            </div>
            <div className="reactions-comments">
                <Button onClick={handleLike} fullWidth>
                    {liked ? <LikeIcon className="liked" /> : <LikeBtnIcon />}
                </Button>
                <Button fullWidth>
                    <CommentIcon />
                </Button>
            </div>
            <div className="type-comment"></div>
        </Box>
    );
}

export default PostBox;
