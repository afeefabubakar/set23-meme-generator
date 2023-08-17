import React, { useContext, useEffect } from "react";
import MEMES from "../../data/meme.json";
import Button from "../shared/Button";
import { useForm } from "react-hook-form";
import { SettingsContext } from "./Settings";
import { MemeContext } from "../../App";

export const SettingsPanel = ({ children }) => {
    const { settingsProp, setSettingsProp } = useContext(SettingsContext);
    let positionSettings;
    switch (settingsProp.position) {
        case "left":
            positionSettings = `${
                settingsProp.showSetting ? "left-10" : "-left-96"
            } px-8 py-12 pt-16 top-1/2 w-96 h-[900px] -translate-y-1/2`;
            break;
        case "right":
            positionSettings = `${
                settingsProp.showSetting ? "right-10" : "-right-96"
            } px-8 py-12 pt-16 top-1/2 w-96 h-[800px] -translate-y-1/2`;
            break;
        case "down":
            positionSettings = `${
                settingsProp.showSetting ? "bottom-0" : "-bottom-60"
            } p-4 left-0 h-60 w-screen`;
            break;
        case "up":
            positionSettings = `${
                settingsProp.showSetting ? "top-0" : "-top-60"
            } p-4 left-0 h-60 w-screen`;
            break;
        default:
            positionSettings = `left-0 top-0 w-96 h-screen`;
    }

    return (
        <>
            <div
                className={`bg-slate-300 rounded-lg p-6 z-10 transition-all duration-[500ms] absolute flex flex-col gap-6 items-center ${positionSettings}`}>
                <Button
                    variant={"solid"}
                    customStyle={{
                        position: "absolute",
                        transform: "rotate(90deg) translateX(-50%)",
                        right: "-9.75rem",
                        top: "50%",
                        borderRadius: "0.5rem 0.5rem 0 0",
                        fontSize: "32px",
                    }}
                    onClick={() =>
                        setSettingsProp({ ...settingsProp, showSetting: true })
                    }>
                    ⚙
                </Button>
                {children}
            </div>
        </>
    );
};

export const SettingsHeader = ({ title, subtitle }) => {
    const { settingsProp } = useContext(SettingsContext);
    let settingsPosition = settingsProp.position;

    let textAlign;
    switch (settingsPosition) {
        case "left":
            textAlign = "text-left";
            break;
        case "right":
            textAlign = "text-right";
            break;
        default:
            textAlign = "text-center";
    }

    return (
        <div>
            <div className={`w-full mb-4 ${textAlign}`}>
                <h3 className={`text-2xl`}>{title}</h3>
                <p className={`text-lg ${textAlign}`}>{subtitle}</p>
            </div>
        </div>
    );
};

export const SettingsBody = () => {
    const { memeIndex, setMemeCaption } = useContext(MemeContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => setMemeCaption(data);

    const generateInputBox = () => {
        const inputArray = [];
        for (let i = 0; i < MEMES[memeIndex].box_count; i++) {
            inputArray.push(
                <div key={i} className="w-full">
                    <label htmlFor={`text${i}`}>{`Insert caption ${
                        i + 1
                    }`}</label>
                    <input
                        className="block border border-gray-400 px-2 py-1 w-full"
                        id={`text${i}`}
                        {...register(`text${i}`)}
                    />
                    <div className="flex items-center gap-3">
                        <label htmlFor={`color${i}`}>Color</label>
                        <input
                            type="color"
                            id={`color${i}`}
                            {...register(`color${i}`)}
                        />
                        <label htmlFor={`size${i}`}>Size</label>
                        <input
                            type="number"
                            id={`size${1}`}
                            defaultValue={64}
                            className="w-8 text-center"
                            {...register(`size${i}`)}
                        />
                    </div>
                </div>
            );
        }

        return inputArray;
    };

    useEffect(() => {
        reset();
    }, [memeIndex]);

    return (
        <form
            key={memeIndex}
            className="flex flex-col items-center space-y-2 w-full"
            onSubmit={handleSubmit(onSubmit)}>
            <Button variant={"outline"}>Generate caption</Button>
            {generateInputBox()}
        </form>
    );
};

export const SettingsSubHeader = ({ primaryButton }) => {
    const { setMemeIndex, memeIndex } = useContext(MemeContext);
    const { settingsProp } = useContext(SettingsContext);
    let settingsPosition = settingsProp.position;

    let flexSetting;
    switch (settingsPosition) {
        case "left":
        case "right":
            flexSetting = "flex-col";
            break;
        default:
            flexSetting = "flex-row";
    }

    return (
        <div className={`w-min flex gap-2 ${flexSetting}`}>
            <Button
                variant={"outline"}
                onClick={() => memeIndexGenerator(setMemeIndex, memeIndex)}>
                {primaryButton}
            </Button>
        </div>
    );
};

const memeIndexGenerator = (setMemeIndex, memeIndex) => {
    setMemeIndex(Math.floor(Math.random() * 100));
};
