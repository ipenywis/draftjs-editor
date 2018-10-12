import React from "react";
//Import Editor State and DraftEditor
import {EditorState, Editor as DraftEditor} from "draft-js";
//Editor Wrapper Component
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    //Make sure to create an empty instance of the EditorState
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }
  //Method for updating the EditorState with a new one
  updateEditorState(editorState) {
    this.setState({editorState});
  }

  render() {
    // Debug your Editor and notice that the EditorState gets update on every
    // character you type
    console.log("EditorSTATE: ", this.state.editorState);
    //Render the Draftjs Editor Component
    /*
    The Editor Takes the current editorState and provides
    you with onChange callback to update the current EditorState being stored on your state.
    */
    return (
      <div className="editor-container">
        <DraftEditor
          placeholder="Explore Your Way In..."
          editorState={this.state.editorState}
          onChange={this
          .updateEditorState
          .bind(this)}/>
      </div>
    );
  }

}