import React, { useEffect, useState } from "react";
// import postContainer from "./postContainer";

//this will display collage pictures of MooMoo's and navbar 
function Home() {
    const [cow, setCowData] = useState([]);
    const [heartOn, setHeart] = useState(false)

    const emptyHeart = <ion-icon name="heart-outline"></ion-icon>
    const filledHeart = <ion-icon name="heart"></ion-icon>

    // const color = heartOn ? "red" : "white";
    // style={{background: color}} 

    // console.log("empty", emptyHeart)
    // console.log("filled", filledHeart)

    useEffect(() => {
        fetch("http://localhost:3001/cows")
            .then(resp => resp.json())
            .then((data) => {
                console.log("json", data);
                setCowData(data)
            });
    }, []);

    function heartButton() {
        setHeart((heartOn) => !heartOn)
    }

    //make a separate component line 34 down
    //change id to className 

    return (
        <div>
            <header id="title">MooGram!</header>
            {cow.map((cows) => (
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
            )}
        </div>

    );
}

export default Home;