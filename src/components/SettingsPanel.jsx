import React, { useState } from "react";
import MEMES from "../data/meme.json";
import Button from "../components/Button";

const SettingsPanel = () => {
    const [memeIndex, setMemeIndex] = useState(0);
    const memeIndexGenerator = () => {
        setMemeIndex(Math.floor(Math.random() * 100));
        console.log(MEMES[memeIndex]);
    };

    const generateInputBox = () => {
      const inputArray = [];
        for (let i = 0; i < MEMES[memeIndex].box_count; i++) {
            console.log(i, MEMES[memeIndex].box_count);
            const inputArray.push(
                <input className="border border-gray-400" name={`text-${i}`} />
            );
        }
        return inputArray;
    };

    return (
        <div>
            <div className="bg-white absolute top-1/2 left-16 p-6">
                <form action="">{generateInputBox()}</form>
                <Button variant={"solid"} onClick={memeIndexGenerator}>
                    Generate Meme
                </Button>
            </div>
        </div>
    );
};

export default SettingsPanel;
