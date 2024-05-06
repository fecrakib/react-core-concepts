import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";


const Friends = () => {
    const data  = useLoaderData();
    console.log(data);
    return (
        <div className="grid md:grid-cols-3 w-[200px]">
            <h2>Thi is Friend component {data.length}</h2>
            {
                data.map(friend=>
                    <Friend key={friend.id}
                    friend={friend}
                    ></Friend>
                )
            }
        </div>
    );
};

export default Friends;