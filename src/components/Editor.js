import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/theme/material.css';
import React from 'react';
import { Controlled as ControllerEditor } from 'react-codemirror2';

function Editor(props) {
    const { language, displayName, value, onChange } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className="editor-container" >
            <div className="editor-title">
                {displayName}
                <button>O/C</button>
            </div>
            <ControllerEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor;
