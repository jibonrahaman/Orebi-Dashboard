
import Input from "antd/es/input/Input";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from "react";
export default function AddProduct() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
      const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
      };
      
  return (
    
    <div>
      <h2>Product Name :</h2>
      <Input placeholder="Product Name"/>

      {/* Product Description */}
      <h2>Product  Description  :</h2>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
     
    </div>
  )
}
