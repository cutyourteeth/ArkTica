import styled from "styled-components";

const EditorWrapper = styled.div`
    &&{
        /* hack into quill */
        [class*=ql]{
            border:none;
        }
        .ql-editor{
            min-height:320px;
        }

        background:rgba(255,255,255,0);
    }
`

export default EditorWrapper