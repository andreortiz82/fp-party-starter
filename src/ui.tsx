import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Color from '@radix-ui/colors';
import CreatePages from "./components/CreatePages";
import CreateTheme from "./components/CreateTheme";
const {
    gray,
    blue,
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
} = Color;

import "./ui.css";

declare function require(path: string): any;

function App() {

    return (
        <div>
            <CreatePages />
            <CreateTheme />

            <div>
                <textarea id="json">
                </textarea>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));