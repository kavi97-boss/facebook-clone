import MainNav from '../MainNav';
import NavBar from './NavBar';
import CopyRightIcon from '@material-ui/icons/Copyright';

function ProfileLayout({ children }) {
    return (
        <div className="profile-page">
            <MainNav />
            <div className="header">
                <div className="inner">
                    <div
                        className="cover-image"
                        style={{
                            backgroundImage:
                                'url(https://wallpaperaccess.com/full/1094090.jpg)',
                        }}
                    ></div>
                    <div className="profile-pic-line">
                        <div className="profile-pic-name">
                            <div
                                className="profile-pic"
                                style={{
                                    backgroundImage:
                                        'url(https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png)',
                                }}
                            ></div>
                            <h1>Jim Moriarty</h1>
                        </div>
                    </div>
                    <NavBar />
                </div>
            </div>
            <div className="body">
                <div className="inner">{children}</div>
            </div>
            <div className="footer">
                <span>
                    <p>Copyright</p>
                    <CopyRightIcon />
                    <p>2022 All Rights Reserved</p>
                </span>
            </div>
        </div>
    );
}

export default ProfileLayout;
