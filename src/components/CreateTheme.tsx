import * as React from "react";
import { Themes } from "../colors";
const CreateTheme = () => {
    const [theme, setTheme] = React.useState('')

    const chooseTheme = (event) => {
        setTheme(event.target.value)
    };

    const loadTheme = () => {
        parent.postMessage({ pluginMessage: { type: 'load-theme', theme: (theme === 'all') ? Themes : Themes[theme] } }, '*')
    };

    return (
        <div className="create-theme">
            <h2>Choose a Theme</h2>
            <p>Adds semantic styles to this project</p>
            <code>{theme}</code>
            <div>
                <select onChange={chooseTheme} name="theme-name">
                    <option value="all">All</option>
                    <option value="site-light">Site Light</option>
                    <option value="site-dark">Site Dark</option>
                    <option value="sponsor-light">Sponsor Light</option>
                    <option value="sponsor-dark">Sponsor Dark</option>
                    <option value="admin-light">Admin Light</option>
                    <option value="admin-dark">Admin Dark</option>
                </select>
                <button onClick={loadTheme}>Load theme</button>
            </div>
        </div>
    );
}

export default CreateTheme