import * as React from "react";
const CreatePages = () => {
    const onCreatePages = () => {
        parent.postMessage({ pluginMessage: { type: 'create-pages' } }, '*')
    };

    return (
        <div className="create-pages">
            <h2>Stay organized</h2>
            <p>Create default pages for this project:</p>
            <ul>
                <li><span>Cover</span></li>
                <li><span>README</span></li>
                <li><span>Playground</span></li>
                <li><span>Reviewing</span></li>
                <li><span>Ready For Development</span></li>
                <li><span>Archive</span></li>
            </ul>
            <button onClick={onCreatePages}>Create pages</button>
        </div>
    );
}

export default CreatePages