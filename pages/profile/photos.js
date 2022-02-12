import Box from '../../components/posts/Box';
import ProfileLayout from '../../components/profile/profile.layout';

function ProfilePhotos() {
    return (
        <ProfileLayout>
            <Box>
                <div className="photos-grid-container">
                    <h2>Photos</h2>
                    <div className="photos-grid">
                        <div className="image-outer">
                            <div className="image"></div>
                        </div>
                        <div className="image-outer">
                            <div className="image"></div>
                        </div>
                        <div className="image-outer">
                            <div
                                className="image"
                                style={{
                                    backgroundImage:
                                        'url(https://images.unsplash.com/photo-1603979649806-5299879db16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80)',
                                }}
                            ></div>
                        </div>
                        <div className="image-outer">
                            <div className="image"></div>
                        </div>
                        <div className="image-outer">
                            <div className="image"></div>
                        </div>
                        <div className="image-outer">
                            <div className="image"></div>
                        </div>
                        <div className="image-outer">
                            <div className="image"></div>
                        </div>
                    </div>
                </div>
            </Box>
        </ProfileLayout>
    );
}

export default ProfilePhotos;
