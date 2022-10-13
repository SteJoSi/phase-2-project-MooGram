import React, { useEffect, useState } from "react";

//this will display collage pictures of MooMoo's and navbar 
function Home() {
    const [cow, setCowData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/cows")
            .then(resp => resp.json())
            .then((data) => {
                console.log("json", data);
                setCowData(data)
            });
    }, []);

    return (
        <div>
            <header id="title">MooGram!</header>
            {cow.map((cows) => (
                <div id="cowContainer" key={cows.id}>
                    <h3><ion-icon name="person"></ion-icon> {cows.username}</h3>
                    <p>{cows.location}</p>
                    <img src={cows.picture} alt="cow" id="mooPic" />
                    <div>
                        <ion-icon name="heart-outline"></ion-icon> <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    </div>
                    <div id="caption">{cows.username}</div><div>{cows.caption}</div>
                    <p>{cows.date}</p>
                </div>
            )
            )}
        </div>

    );
}

export default Home;