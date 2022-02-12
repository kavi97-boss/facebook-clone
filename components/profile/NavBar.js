import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
    const router = useRouter();

    return (
        <div className="profile-nav-bar">
            <ul>
                <li
                    className={
                        router.pathname === '/profile' ||
                        router.pathname === '/profile/posts'
                            ? 'active'
                            : ''
                    }
                >
                    <Link href="/profile">Posts</Link>
                </li>
                {/* <li
                    className={
                        router.pathname === '/profile/about' ? 'active' : ''
                    }
                >
                    <Link href="/profile/about">About</Link>
                </li> */}
                <li
                    className={
                        router.pathname === '/profile/friends' ? 'active' : ''
                    }
                >
                    <Link href="/profile/friends">Friends</Link>
                </li>
                <li
                    className={
                        router.pathname === '/profile/photos' ? 'active' : ''
                    }
                >
                    <Link href="/profile/photos">Photos</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
