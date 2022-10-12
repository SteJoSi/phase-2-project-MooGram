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
                    <div key={cows.id}>
                        <h3>{cows.username}</h3>
                        <p>{cows.location}</p>
                        <img src={cows.picture} alt="cow" />
                        <p>{cows.date}</p>
                        <p>{cows.caption}</p>
                        <h3>Comments:</h3>
                        <p>{cows.comment1}</p>
                        <p>{cows.comments2}</p>
                    </div>
                )
                )}
        </div>

    );
}

export default Home;