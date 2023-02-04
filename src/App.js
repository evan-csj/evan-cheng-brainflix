import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import "./App.scss";

function App() {
    useEffect(() => {
        document.title = "BrainFlix";
    }, []);
    return (
        <div className="App">
            <Header />
            <Video />
        </div>
    );
}

export default App;
