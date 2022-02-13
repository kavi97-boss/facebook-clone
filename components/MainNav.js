import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import FriendsIcon from '@mui/icons-material/People';
import NotificationIcon from '@mui/icons-material/Notifications';
import ImageIcon from '@mui/icons-material/CropOriginal';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { useState } from 'react';
import NotificationWin from './NotificationWin';

function PopUpChatBox({ posRight = 100 }) {
    return (
        <div className="popuo-chat-box" style={{ right: `${posRight}px` }}>
            <div className="chat-box-header">
                <div className="img"></div>
                <h4>Profile name</h4>
                <Button className="header-btn">
                    <MinimizeIcon />
                </Button>
                <Button className="header-btn">
                    <CloseIcon />
                </Button>
            </div>
            <h1>chat box</h1>
        </div>
    );
}

function MinimizedChat({ posBottom = 10 }) {
    const closeMinimizedChat = () => {
        console.log('close chat');
    };
    return (
        <div className="minimized-chat" style={{ bottom: posBottom }}>
            <div className="minimized-bg"></div>
            <div className="close-btn" onClick={closeMinimizedChat}>
                <CloseIcon />
            </div>
        </div>
    );
}

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
            {/* bottom chat boxes */}
            <PopUpChatBox />
            <PopUpChatBox posRight={460} />
            <PopUpChatBox posRight={820} />
            {/* minimized chats */}
            <MinimizedChat />
            <MinimizedChat posBottom={100} />
            <MinimizedChat posBottom={190} />
        </>
    );
}

export default MainNav;
