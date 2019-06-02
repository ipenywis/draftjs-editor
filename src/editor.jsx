import React from "react";
//Import Editor State and DraftEditor
import { EditorState, Editor as DraftEditor } from "draft-js";
import styled from "styled-components";
import Toolbar from "./containers/toolbar";
import { customStyleFn } from "./containers/toolbar/customStyles";

const EditorWrapper = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 3em;
`;

const EditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;

//Editor Wrapper Component
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    //Make sure to create an empty instance of the EditorState
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }
  //Method for updating the EditorState with a new one
  updateEditorState(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;
    // Debug your Editor and notice that the EditorState gets update on every
    // character you type
    console.log("EditorSTATE: ", this.state.editorState);
    //Render the Draftjs Editor Component
    /*
    The Editor Takes the current editorState and provides
    you with onChange callback to update the current EditorState being stored on your state.
    */
    return (
      <EditorWrapper>
        <Toolbar
          editorState={editorState}
          updateEditorState={this.updateEditorState.bind(this)}
        />
        <EditorContainer>
          <DraftEditor
            placeholder="Explore Your Way In..."
            editorState={this.state.editorState}
            onChange={this.updateEditorState.bind(this)}
            customStyleFn={customStyleFn}
          />
        </EditorContainer>
      </EditorWrapper>
    );
  }
}
