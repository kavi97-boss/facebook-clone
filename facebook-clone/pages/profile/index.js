import { useRef } from 'react';
import DetailsLeft from '../../components/profile/DetailsLeft';
import DetailsRight from '../../components/profile/DetailsRight';
import ProfileLayout from '../../components/profile/profile.layout';

function Profile() {
    const leftRef = useRef();

    console.log(leftRef.current);

    return (
        <ProfileLayout>
            <div className="profile-body">
                <DetailsLeft refff={leftRef} />
                {/* my posts */}
                <DetailsRight />
            </div>
        </ProfileLayout>
    );
}

export default Profile;
