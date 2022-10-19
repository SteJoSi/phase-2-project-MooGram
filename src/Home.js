import React, { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import Header from "./Header";

function Home() {
    const [cow, setCowData] = useState([]);
    const [heartOn, setHeart] = useState(false)


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

    const emptyHeart = <ion-icon name="heart-outline"></ion-icon>
    const filledHeart = <ion-icon name="heart"></ion-icon>

    return (
        <div>
            <Header />
            <div className="cowDiv">
            {cow.map((cows) => (
                <PostContainer
                    cows={cows}
                    heartButton={heartButton}
                    emptyHeart={emptyHeart}
                    filledHeart={filledHeart}
                    heartOn={heartOn}
                />
            )
            )}
            </div>
        </div>
    );
}

export default Home;