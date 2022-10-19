import React, { useState } from "react";
// import {picture, date} from "./exploreData.json";

//(explore)this will be display the picture the user clicked on with date and location
function Explore() {
    const [isHovering, setIsHovering] = useState(false)
    //add a hover effect to display date and location

    // console.log("pics", picture)

    // useEffect(() => {
    //     fetch("http://localhost:3001/cows")
    //         .then(resp => resp.json())
    //         .then((data) => {
    //             console.log("json", data);
    //             setCowData(data)
    //         });
    // }, []);

    function handleMouseEnter(e) {
        console.log("true", e.target)
        setIsHovering(true)
    }

    function handleMouseLeave(e) {
        console.log("false", e.target)
        setIsHovering(false)
    }

    return (
        <div>
            <h1 className="exploreTitle">Cows!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmfjg9mxTPOypfxtNaxXSQGHPWkodhvXv_g&usqp=CAU" alt="cow" className="explorePics" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpVlI8xlGlwarmMx455mlfRHGIah4DKhB1g&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmehSYxzdO4LtyyDXRFX688O2wJX8OA7-_4g&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpMqqO4ZV-JgFGUWmy85J2D-I9eyDqQSzYHBqVNgTTER9s7Gp797-bmxGCytnMZTyGbI&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokMGk-po19BVx8P42vuS5Q6oooGC9f8iGXQ&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE9kADZetI9Sjc1F2d9OZ9XcN13U6wqxC3Q&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5A1_GwtM6nqKAJSZmzuOE98hFgf_bBUlWnA&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEwpuRd1m1F-u7i2SF1FieXVAchZ98lnCbw&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayRU3M5abC91u4mlFqoK4orxgmezR7_IUOQ&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqwvIicHMXX4vnq832JcjB5_aIduzRLv-og&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BD-WadFCBXFRFZjBwHO4vstIK14CbIAJoQ&usqp=CAU" alt="cow" className="explorePics" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LJgmFpmUhSxc557EdGjxIhpe_860i504LQ&usqp=CAU" alt="cow" className="explorePics" />
        </div>
    )
}

export default Explore; 