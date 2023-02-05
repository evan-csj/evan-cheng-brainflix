import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
    useEffect(() => {
        document.title = "BrainFlix";
    }, []);
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
}

export default App;
