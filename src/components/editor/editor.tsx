import React from 'react';
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
  RichUtils,
} from 'draft-js';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import IconButton from '@mui/material/IconButton';
import 'draft-js/dist/Draft.css';

import { EditorContainer, RichUtilsWrapper, TextArea } from './style';

interface Props {
  content: RawDraftContentState;
  onChange: (content: RawDraftContentState) => void;
}

const styleMap = {
  BOLD: {
    color: '#8600FF',
    fontWeight: '500',
  },
};

export const RichEditor = React.memo(
  ({ content, onChange, ...restProps }: Props) => {
    const [editorState, setEditorState] = React.useState(() =>
      EditorState.moveFocusToEnd(
        EditorState.createWithContent(convertFromRaw(content))
      )
    );

    const handleChange = (editorState: EditorState) => {
      setEditorState(editorState);
      onChange(convertToRaw(editorState.getCurrentContent()));
    };

    const setBold = () => {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    return (
      <EditorContainer>
        <RichUtilsWrapper>
          <IconButton onMouseDown={setBold}>
            <FormatBoldIcon />
          </IconButton>
        </RichUtilsWrapper>
        <TextArea>
          <Editor
            {...restProps}
            customStyleMap={styleMap}
            editorState={editorState}
            onChange={handleChange}
          />
        </TextArea>
      </EditorContainer>
    );
  }
);
