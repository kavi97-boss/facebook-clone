import { useRouter } from 'next/router';

function Friend() {
    const router = useRouter();
    const id = router.query.id;
    return (
        <div>
            <h1>This is friend id : {id}</h1>
        </div>
    );
}

export default Friend;
