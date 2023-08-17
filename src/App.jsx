import MemePanel from "./components/MemePanel";
import Settings from "./components/settings/Settings";

function App() {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
            <Settings />
            <MemePanel />
        </div>
    );
}

export default App;
