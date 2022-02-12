import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import FriendsIcon from '@mui/icons-material/People';
import NotificationIcon from '@mui/icons-material/Notifications';

function MainNav() {
    return (
        <div className="main-nav-bar">
            <div className="left-section">
                <div className="logo">
                    <span>m</span>
                </div>
                <div className="search-panel">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Search mybook" />
                </div>
            </div>
            <div className="middle-section">
                <Button>
                    <HomeIcon />
                </Button>
                <Button>
                    <FriendsIcon />
                </Button>
                <Button>
                    <NotificationIcon />
                </Button>
            </div>
            <div className="right-section">
                <Button className="logout-btn" variant="">
                    <LogoutIcon />
                </Button>
            </div>
        </div>
    );
}

export default MainNav;
