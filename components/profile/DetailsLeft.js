import Box from '../../components/posts/Box';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import TimeIcon from '@material-ui/icons/AccessTime';
import HeartIcon from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';
import Link from 'next/link';

function DetailsLeft({ refff }) {
    return (
        <div className="left" ref={refff}>
            <Box>
                <h2>Intro</h2>
                <Button className="bg-ash my-2" variant="text" fullWidth>
                    Edit Details
                </Button>
                <div className="details-line">
                    <SchoolIcon />
                    <h3>Studied Wayamba Royal Collage</h3>
                </div>
                <div className="details-line">
                    <LocationIcon />
                    <h3>From Kurunegala</h3>
                </div>
                <div className="details-line">
                    <HeartIcon />
                    <h3>Single</h3>
                </div>
                <div className="details-line">
                    <TimeIcon />
                    <h3>Joined 2022/02/09</h3>
                </div>
            </Box>
            <Box>
                <div className="topic-line">
                    <h2>Photos</h2>
                    <Link href="/profile/photos">See all photos</Link>
                </div>
                <div className="image-grid">
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/1_moraine_lake_pano_2019.jpg/1200px-1_moraine_lake_pano_2019.jpg)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://i.pinimg.com/736x/a6/2c/7f/a62c7f3201caecf49b45dee96806507f--pigeon-lighthouses.jpg)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/SplitPoint_0102.jpg/800px-SplitPoint_0102.jpg)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://live.staticflickr.com/1923/43607523960_4e2ed86653_b.jpg)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(http://cdn.cnn.com/cnnnext/dam/assets/191011110515-09-australia-beautiful-places.jpg)',
                        }}
                    ></div>
                    <div
                        className="image"
                        style={{
                            backgroundImage:
                                'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hobbit-movies-in-order-lord-of-the-rings-movies-in-order-hobbit-index-1643217300.jpeg)',
                        }}
                    ></div>
                </div>
            </Box>
            <Box>
                <div className="topic-line">
                    <h2>Friends</h2>
                    <Link href="/profile/friends">See all friends</Link>
                </div>
                <div className="friends-grid">
                    <Link href="/profile/[id]" as="/profile/1123">
                        <div className="friend">
                            <div
                                className="image"
                                style={{
                                    backgroundImage:
                                        'url(https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg)',
                                }}
                            ></div>
                            <p>Friend name</p>
                        </div>
                    </Link>
                </div>
            </Box>
        </div>
    );
}

export default DetailsLeft;
