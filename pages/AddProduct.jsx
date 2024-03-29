import Input from "antd/es/input/Input";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import { useEffect, useState } from "react";
import { Select, Tag } from 'antd';
import axios from "axios";

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
    const [addstore , setaddstore] = useState([])
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    useEffect (() => {
        const fetchStore = async () => {
          try {
            const arr = []
            const response = await axios.get("http://localhost:7000/api/v1/allget/getstore");
            // response.data &&
            response.data.map((item)=>{
                arr.push({
                    value: item._id,
                    label: item.storeName
                })
            })
            setaddstore(arr);
          } catch (error) {
            console.log("Error Fethcing Store Data", error);
          }
        }
        fetchStore()
      }, [addstore])
 console.log(addstore);
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
                    options={addstore}
                />
            </div>

        </div>
    )
}
