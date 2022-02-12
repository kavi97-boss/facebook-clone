import ProfileLayout from '../../components/profile/profile.layout';
import SearchIcon from '@material-ui/icons/Search';
import Box from '../../components/posts/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

function ProfileFriends() {
    return (
        <ProfileLayout>
            <Box>
                <div className="friends-header">
                    <h2>Friends</h2>
                    <div className="search-line">
                        <SearchIcon className="search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <Link href="/profile/friends/request">
                        <Button className="link-btn">Friend Requests</Button>
                    </Link>
                    <Link href="/profile/friends/find">
                        <Button className="link-btn">Find Friend</Button>
                    </Link>
                </div>
                <div className="all-friends-grid">
                    <div className="friend-outer">
                        <Link href="/profile/[id]" as="/profile/11345">
                            <div className="friend">
                                <div className="friend-img"></div>
                                <h3>Friend Name</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="friend-outer">
                        <Link href="/profile/[id]" as="/profile/11345">
                            <div className="friend">
                                <div className="friend-img"></div>
                                <h3>Friend Name</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="friend-outer">
                        <Link href="/profile/[id]" as="/profile/11345">
                            <div className="friend">
                                <div
                                    className="friend-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80)',
                                    }}
                                ></div>
                                <h3>Friend Name</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="friend-outer">
                        <Link href="/profile/[id]" as="/profile/11345">
                            <div className="friend">
                                <div className="friend-img"></div>
                                <h3>Friend Name</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="friend-outer">
                        <Link href="/profile/[id]" as="/profile/11345">
                            <div className="friend">
                                <div className="friend-img"></div>
                                <h3>Friend Name</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </Box>
        </ProfileLayout>
    );
}

export default ProfileFriends;
