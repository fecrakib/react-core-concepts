import { useLoaderData } from "react-router-dom";


const Friends = () => {
    const data  = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>Thi is Friend component</h2>
        </div>
    );
};

export default Friends;