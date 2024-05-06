

const Friend = ({friend}) => {
    console.log(friend)
    const {name,email} = friend;
    return (
        <div className="p-3 ">
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
};

export default Friend;