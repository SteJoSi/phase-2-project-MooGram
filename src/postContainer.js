import React from "react";
import HeartButton from "./HeartButton";

function PostContainer({ cows }) {

    const iconStyle = {
        "color": "pink",
        "fontSize": "30px"
    }

    return (
        <div className="cowContainer" key={cows.id}>
            <h3 className="username"><ion-icon name="person" style={iconStyle}></ion-icon>{cows.username}</h3>
            <p>{cows.location}</p>
            <img src={cows.picture} alt="cow" className="mooPic" />
            <HeartButton />
            <div className="caption">{cows.username}</div><div>{cows.caption}</div>
            <p>{cows.date}</p>
        </div>
    )
}

export default PostContainer;