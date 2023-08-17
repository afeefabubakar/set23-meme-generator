import MemePanel from "./components/MemePanel";
import SettingsPanel from "./components/SettingsPanel";

function App() {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-black">
            <SettingsPanel />
            <MemePanel />
        </div>
    );
}

export default App;
