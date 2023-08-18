import React, { useContext, useEffect } from "react";
import { MemeContext } from "../App";
import MEMES from "../data/meme.json";
import Draggable from "react-draggable";

const MemePanel = () => {
    const { memeIndex, memeCaption, setMemeCaption } = useContext(MemeContext);
    const memeImg = MEMES[memeIndex].url;

    const generateCaption = () => {
        const memeCaptionArray = [];
        const memeCaptionDomArray = [];
        const memeCaptionColorArray = [];
        const memeCaptionSizeArray = [];
        Object.entries(memeCaption).forEach((entry) => {
            if (/(text)/.test(entry[0])) {
                memeCaptionArray.push(entry);
            } else if (/(color)/.test(entry[0])) {
                memeCaptionColorArray.push(entry);
            } else {
                memeCaptionSizeArray.push(entry);
            }
        });

        memeCaptionArray.forEach((caption, index) => {
            let topValue = index * 100;
            let color = memeCaptionColorArray[index][1];
            let size = memeCaptionSizeArray[index][1];

            memeCaptionDomArray.push(
                <Draggable key={index} bounds={`parent`}>
                    <div
                        className={`text-6xl absolute left-1/2 z-5`}
                        style={{
                            color: color,
                            top: topValue,
                        }}>
                        <p
                            className="drop-shadow-[0_0_1.2px_rgb(0,0,0)] whitespace-pre-wrap"
                            style={{ fontSize: `${size}px` }}>
                            {caption[1]}
                        </p>
                    </div>
                </Draggable>
            );
        });

        return memeCaptionDomArray;
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
