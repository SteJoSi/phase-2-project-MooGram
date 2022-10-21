import React, { useState, useEffect } from "react";
import HeartButton from "./HeartButton";

function Explore() {
    const [isHovering, setIsHovering] = useState(false)
    const [images, setImageData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/images")
            .then(resp => resp.json())
            .then((data) => {
                console.log("explore", data);
                setImageData(data);
            });
    }, []);

    function handleMouseEnter(e) {
        console.log("true", e.target)
        setIsHovering(true)
    }

    function handleMouseLeave(e) {
        console.log("false", e.target)
        setIsHovering(false)
    }

    function crossClass() {
        return `exploreDate ${isHovering ? "hidden" : ""}`
    }

    return (
        <div>
            <h1 className="exploreTitle">Cows!</h1>
            <div>
                {images.map((image) => {
                    return (
                        <div key={image.id} className="explorePics" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <img src={image.picture} alt="cow" />
                            <p className={crossClass()}>{image.date}</p>
                            <HeartButton crossClass={crossClass()}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore; 