import React from "react";
import { inlineStyles } from "./constants";
import styled from "styled-components";
import { ToolbarItem, Container } from "./common";
import { RichUtils } from "draft-js";

export function RenderInlineStyles(props) {
  const { editorState, updateEditorState } = props;
  const applyStyle = (e, style) => {
    e.preventDefault();
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = style => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  return (
    <Container>
      {inlineStyles.map((item, idx) => {
        return (
          <ToolbarItem
            isActive={isActive(item.style)}
            key={`${item.label}-${idx}`}
            onClick={e => applyStyle(e, item.style)}
          >
            {item.icon || item.label}
          </ToolbarItem>
        );
      })}
    </Container>
  );
}
