import React, { useState } from "react";

function HeartButton({ crossClass }) {
    const [heartClick, setHeartClick] = useState(false)

    function heartButton() {
        setHeartClick((heartClick) => !heartClick)
    }

    const heartStyle = {
        "color": "pink",
        "fontSize": "30px",
    }

    const emptyHeart = <ion-icon name="heart-outline"></ion-icon>
    const filledHeart = <ion-icon name="heart"></ion-icon>

    return (
        <div className="heartBtn">
            <button
                className={crossClass}
                style={heartStyle}
                onClick={heartButton}>
                {heartClick ? filledHeart : emptyHeart}<ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </button>
        </div>
    )
}

export default HeartButton;