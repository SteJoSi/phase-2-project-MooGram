import React, { useEffect, useState } from "react";

//this will display collage pictures of MooMoo's and navbar 
function Home() {
    // const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/cows")
        .then(resp => resp.json())
        .then((data) => console.log("json", data))
    }, []);

    return (
        <div id="title">
            <header>MooGram!</header>
        </div>

    );
}

export default Home;