import { Button, Input } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from "react";
export default function AddCategory() {
    const [Addcategory,setAddcategory] = useState(" ");
        const [editorState, setEditorState] = useState(EditorState.createEmpty());
              const onEditorStateChange = (editorState) => {
                setEditorState(editorState);
              };
          console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
          console.log(Addcategory);
          
  return (
    <>
    <h3>Category Name :</h3>
    <Input onChange={(e)=>setAddcategory(e.target.value)} placeholder="category name"/>

    <div>
    <h3>Category Description :</h3>
    <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
       <Button type="primary">Upload Category</Button>

    </>
  )
}
