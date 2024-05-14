import { Button, Input } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from "react";
import axios from "axios";
import { Alert, Space } from 'antd';

export default function AddCategory() {
const [alertSuccess,setAlertSuccess] = useState(false)
    const [categoryName, setCategoryName] = useState(""); // Changed the name for clarity and initial value to empty string
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const handleUploadCategory = async () => {
        if (!categoryName.trim() || !editorState.getCurrentContent().hasText()) {
            alert("Please enter both category name and description.");
            return;
        }
        try {
            await axios.post("http://localhost:7000/api/v1/category/category", {
                name: categoryName,
                description: draftToHtml(convertToRaw(editorState.getCurrentContent()))
            });
            setCategoryName(""); // Reset the category name
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

    return (
        <>
           {
            alertSuccess &&
             <Alert
            style={{marginTop: 20}}
             message="Upload Successfuly"
             type="success"
             showIcon
         />
           }
            <h3>Category Name:</h3>
            <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Category name" />

            <div>
                <h3>Category Description:</h3>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>
            <Button onClick={handleUploadCategory} type="primary">Upload Category</Button>
        </>
    );
}
