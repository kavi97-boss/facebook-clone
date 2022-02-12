import React from 'react';
import CreatePostBox from '../posts/CreatePostBox';
import PostBox from '../posts/PostBox';

function DetailsRight() {
    return (
        <div className="right">
            <CreatePostBox />
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
        </div>
    );
}

export default DetailsRight;
