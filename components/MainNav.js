import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import FriendsIcon from '@mui/icons-material/People';
import NotificationIcon from '@mui/icons-material/Notifications';
import ImageIcon from '@mui/icons-material/CropOriginal';
import { useState } from 'react';
import NotificationWin from './NotificationWin';

function MainNav() {
    const router = useRouter();

    const [onNotfy, setonNotify] = useState(false);

    const hideNotify = () => {
        setonNotify(false);
    };
    const showNotify = () => {
        if (onNotfy) {
            hideNotify();
        } else {
            setonNotify(true);
        }
    };
    const handleRoute = (addr) => {
        hideNotify();
        router.push(addr);
    };

    return (
        <>
            <div className="main-nav-bar">
                {/* <div className="notification-bg"></div> */}
                <div className="left-section">
                    <div
                        className="logo"
                        onClick={() => {
                            handleRoute('/');
                        }}
                    >
                        <span>m</span>
                    </div>
                    <div className="search-panel">
                        <SearchIcon className="search-icon" />
                        <input type="text" placeholder="Search mybook" />
                    </div>
                </div>
                <div className="middle-section">
                    <Button
                        onClick={() => {
                            handleRoute('/');
                        }}
                        fullWidth
                        className={
                            router.pathname === '/' ? 'active-in-home' : ''
                        }
                    >
                        <HomeIcon />
                    </Button>
                    <Button
                        onClick={() => {
                            handleRoute('/profile/friends');
                        }}
                        fullWidth
                        className={
                            router.pathname === '/profile/friends'
                                ? 'active-in-home'
                                : ''
                        }
                    >
                        <FriendsIcon />
                    </Button>
                    <Button
                        onClick={() => {
                            handleRoute('/profile/photos');
                        }}
                        fullWidth
                        className={
                            router.pathname === '/profile/photos'
                                ? 'active-in-home'
                                : ''
                        }
                    >
                        <ImageIcon />
                    </Button>
                    <Button
                        onClick={showNotify}
                        className="notification-btn"
                        fullWidth
                    >
                        <NotificationIcon />
                    </Button>
                    <NotificationWin
                        showOrHide={onNotfy ? 'show-notifications' : ''}
                    />
                </div>
                <div className="right-section">
                    <Button
                        className="profile-pic-btn"
                        onClick={() => {
                            handleRoute('/profile');
                        }}
                    >
                        <div className="profile-pic">
                            <div className="img"></div>
                            <h3>Profile</h3>
                        </div>
                    </Button>
                    <Button className="logout-btn">
                        <LogoutIcon />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default MainNav;
