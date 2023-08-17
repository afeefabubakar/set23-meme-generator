import React, { useContext, useEffect } from "react";
import { MemeContext } from "../App";
import MEMES from "../data/meme.json";
import Draggable from "react-draggable";

const MemePanel = () => {
    const { memeIndex, memeCaption, setMemeCaption } = useContext(MemeContext);
    const memeImg = MEMES[memeIndex].url;

    const generateCaption = () => {
        return Object.values(memeCaption).map((caption, index) => {
            let topValue = index * 100;
            return (
                <Draggable key={index} bounds={`parent`}>
                    <div
                        className={`text-slate-50 text-6xl absolute left-1/2 z-5`}
                        style={{
                            top: topValue,
                        }}>
                        <p className="drop-shadow-[0_0_1.2px_rgb(0,0,0)]">
                            {caption}
                        </p>
                    </div>
                </Draggable>
            );
        });
    };

    useEffect(() => {
        setMemeCaption({});
    }, [memeIndex]);

    return (
        <div className=" w-3/4 h-3/4 rounded-xl bg-slate-800">
            <div className="relative flex justify-center items-center w-full h-full rounded-xl">
                {generateCaption()}
                <img
                    src={memeImg}
                    className={`w-3/4 h-3/4 object-scale-down`}
                    alt="Randomly generated meme image"
                />
            </div>
        </div>
    );
};

export default MemePanel;
