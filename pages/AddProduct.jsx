import Input from "antd/es/input/Input";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import { useState } from "react";
import { Select, Tag } from 'antd';
const options = [
    {
        value: 'gold',
    },
    {
        value: 'lime',
    },
    {
        value: 'green',
    },
    {
        value: 'cyan',
    },
];
const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginInlineEnd: 4,
            }}
        >
            {label}
        </Tag>
    );
};

export default function AddProduct() {


    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    return (


        <div>
            <h2>Product Name :</h2>
            <Input placeholder="Product Name" />

            {/* Product Description */}
            <div>
                <h2>Product  Description  :</h2>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>

            <div>
                <h2>Proudt StoreName :</h2>
                <Select
                    mode="single"
                    tagRender={tagRender}
                    style={{
                        width: '100%',
                    }}
                    options={options}
                />
            </div>

        </div>
    )
}
