import React, { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import Header from "./Header";

function Home() {
    const [cow, setCowData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/cows")
            .then(resp => resp.json())
            .then((data) => {
                // console.log("json", data);
                setCowData(data)
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="cowDiv">
            {cow.map((cows) => (
                <PostContainer
                    key={cows.id}
                    cows={cows}
                />
            )
            )}
            </div>
        </div>
    );
}

export default Home;