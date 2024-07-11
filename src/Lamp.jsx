import React from "react";

function Lamp({ light, toggleLight }) {
    const imageStyle = {
        width: '150px',
        height: '200px'
    };

    const containerStyle = {
        display: 'inline-block',
        margin: '10px'
    };

    return (
        <div style={containerStyle}>
            <div className="image">
                {light === "OFF" ? 
                    <img src="image/전구 off.png" alt="전구 off" style={imageStyle} /> : 
                    <img src="image/전구 on.png" alt="전구 on" style={imageStyle} />
                }
            </div>
            <button onClick={toggleLight}>
                {light === "OFF" ? "전구 켜기" : "전구 끄기"}
            </button>
        </div>
    );
}

export default Lamp;
