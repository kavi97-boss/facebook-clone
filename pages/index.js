import React from 'react';
import MainNav from '../components/MainNav';
import CreatePostBox from '../components/posts/CreatePostBox';
import PostBox from '../components/posts/PostBox';
import { MainFooter } from '../components/profile/profile.layout';

function HomePage() {
    return (
        <div className="home-page">
            <MainNav />
            <div className="inner-home-window">
                <div className="inner">
                    <CreatePostBox />
                    <PostBox />
                </div>
            </div>
            <MainFooter />
        </div>
    );
}

export default HomePage;
