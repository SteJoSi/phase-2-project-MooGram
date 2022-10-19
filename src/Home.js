import React, {useState, useEffect} from "react";
import PostContainer from "./PostContainer";

//this will display collage pictures of MooMoo's and navbar 
function Home() {
    const [cow, setCowData] = useState([]);
    const [heartOn, setHeart] = useState(false)

    const emptyHeart = <ion-icon name="heart-outline"></ion-icon>
    const filledHeart = <ion-icon name="heart"></ion-icon>

    // const color = heartOn ? "red" : "white";
    // style={{background: color}} 

    console.log("empty", emptyHeart)
    console.log("filled", filledHeart)

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


    return (
        <div>
            <header id="title">MooGram!</header>

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
    );
}

export default Home;