import Link from 'next/link';

function Notify() {
    return (
        <Link href="#">
            <div className="notify">
                <div className="notify-img"></div>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
            </div>
        </Link>
    );
}

function NotificationWin({ showOrHide }) {
    return (
        <div className={`notification-win ${showOrHide}`}>
            <div className="top-arrow"></div>
            <h2>Notifications</h2>
            <div className="inner-notify">
                <Notify />
                <Notify />
                <Notify />
                <Notify />
                <Notify />
                <Notify />
                <Notify />
                <Notify />
                <Notify />
            </div>
        </div>
    );
}

export default NotificationWin;
