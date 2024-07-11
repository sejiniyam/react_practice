import React, { useState } from "react";
import Lamp from "./Lamp";

function LampController() {
    const [lights, setLights] = useState({
        light1 : "OFF",
        light2 : "OFF",
        light3 : "OFF",
        light4 : "OFF",
        light5 : "OFF",
    });

    const { light1, light2, light3, light4, light5 } = lights;

    const toggleAllLights = () => {
        const newState = light1 === "OFF" ? "ON" : "OFF";
        setLights({
            light1: newState,
            light2: newState,
            light3: newState,
            light4: newState,
            light5: newState,
        });
    };

    const toggleLight = (lightKey) => {
        setLights((prevLights) => ({
            ...prevLights,
            [lightKey]: prevLights[lightKey] === "OFF" ? "ON" : "OFF",
        }));
    };

    
    return (
        <>
            <Lamp light={light1} toggleLight={() => toggleLight("light1")} />
            <Lamp light={light2} toggleLight={() => toggleLight("light2")} />
            <Lamp light={light3} toggleLight={() => toggleLight("light3")} />
            <Lamp light={light4} toggleLight={() => toggleLight("light4")} />
            <Lamp light={light5} toggleLight={() => toggleLight("light5")} />
            <div>
                <button onClick={toggleAllLights}>
                    {light1 === "OFF" ? "전체 켜기" : "전체 끄기"}
                </button>
            </div>
        </>
    );
}

export default LampController;
