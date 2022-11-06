import React from "react";
import Collapse from "./components/Collapse";

const App = () => {
    const text = 'Hello World'
    return (
        <Collapse text={text} status={false}/>
    );
}

export default App