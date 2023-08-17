import React, { createContext, useState } from "react";
import {
    SettingsBody,
    SettingsSubHeader,
    SettingsHeader,
    SettingsPanel,
} from "./SettingsPanel";
import Button from "../shared/Button";
import { closeButtonStyle } from "../../assets/tailwind/button";

export const SettingsContext = createContext(null);

const Settings = () => {
    const [settingsProp, setSettingsProp] = useState({
        showSetting: false,
        position: "left",
        slide: 0,
    });

    return (
        <SettingsContext.Provider value={{ settingsProp, setSettingsProp }}>
            <SettingsPanel>
                <Button
                    variant={"solid"}
                    customStyle={closeButtonStyle}
                    onClick={() =>
                        setSettingsProp({ ...settingsProp, showSetting: false })
                    }>
                    ╳
                </Button>
                <div>
                    <SettingsHeader title={"Meme Generator"} />
                    <SettingsSubHeader primaryButton={"Generate meme"} />
                </div>
                <SettingsBody />
            </SettingsPanel>
        </SettingsContext.Provider>
    );
};

export default Settings;
