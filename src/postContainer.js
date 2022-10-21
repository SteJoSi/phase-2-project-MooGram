import React from "react";

function PostContainer({ cows, heartButton, emptyHeart, filledHeart, heartOn }) {
    return (
        <div className="cowContainer" key={cows.id}>
            <h3 className="username"><ion-icon name="person"></ion-icon> {cows.username}</h3>
            <p>{cows.location}</p>
            <img src={cows.picture} alt="cow" className="mooPic" />
            <div>
                <button onClick={heartButton}>{heartOn ? filledHeart : emptyHeart}</button><ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </div>
            <div className="caption">{cows.username}</div><div>{cows.caption}</div>
            <p>{cows.date}</p>
        </div>
    )
}

export default PostContainer;