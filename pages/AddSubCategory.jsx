import { Button, Input, Select, Tag } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Space } from 'antd';




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


export default function AddSubCategory() {
    const [alertSuccess, setAlertSuccess] = useState(false)
    const [subcategoryName, setSubCategoryName] = useState(""); // Changed the name for clarity and initial value to empty string
    const [categoryStore, setCategoryStore] = useState([]);
    const [category, setCategory] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const handleSubUploadCategory = async () => {
        if (!subcategoryName.trim() || !editorState.getCurrentContent().hasText()) {
            alert("Please enter both sub category name and description.");
            return;
        }
        try {
            await axios.post("http://localhost:7000/api/v1/category/subcategory", {
                name: subcategoryName,
                description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                category: category
               
            });
            setSubCategoryName(""); // Reset the category name
            setEditorState(EditorState.createEmpty()); // Reset the editor
            setAlertSuccess(true)
        } catch (error) {
            console.error("Failed to upload category", error);
            alert("Failed to upload category");
        }
        // Hide the alert after 1 second
        setTimeout(() => {
            setAlertSuccess(false);
        }, 1500);  // 1000 milliseconds = 1 second
    };

    useEffect(() => {
        const fetchCategoyr = async () => {
            try {
                const arr = [];
                const response = await axios.get("http://localhost:7000/api/v1/allget/getAllCategory")
                response.data.CATEGORYS.map((item) => {
                    arr.push({
                        value: item._id,
                        label: item.name
                    })
                })
                setCategoryStore(arr)
            } catch (error) {
                console.log("Error Fetching Category  Data,AddSubCategory page", error);
            }
        }
        fetchCategoyr();
    }, [categoryStore])
    return (
        <>
            {
                alertSuccess &&
                <Alert
                    style={{ marginTop: 20 }}
                    message="Upload Successfuly"
                    type="success"
                    showIcon
                />
            }
            <h3>SubCategory Name:</h3>
            <Input value={subcategoryName} onChange={(e) => setSubCategoryName(e.target.value)} placeholder="SubCategory name" />

            <div>
                <h3>SubCategory Description:</h3>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>
            <div>
                <h3>Select Category :</h3>
                <Select
                onChange={(e)=>setCategory(e)}
                    mode="single"
                    tagRender={tagRender}
                    style={{
                        width: '100%',
                    }}
                    options={categoryStore}
                />
            </div>

            <Button style={{ marginTop: 20 }} onClick={handleSubUploadCategory} type="primary">Upload Category</Button>
        </>
    );
}
