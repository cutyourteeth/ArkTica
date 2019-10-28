import { Button } from 'antd'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { uuid } from '../../utils/global-utils'
import useApp from '../store/useApp'
import useEditor, { IEditorStore } from '../store/useEditor'

const Editor = () => {
  const [editorStore, setters] = useEditor()
  const { quillConfig, quillValue } = editorStore as IEditorStore
  const { changeQuillValue, resetQuillValue } = setters

  const [, appSetters] = useApp()
  const { addLog } = appSetters

  const handleUpload = () => {
    storeLogToLocal()
    resetQuillValue()
  }

  const storeLogToLocal = () => {
    const newLog = { content: quillValue, id: uuid(), date: new Date() }
    addLog(newLog)
  }

  return (
    <div>
      <ReactQuill {...quillConfig} value={quillValue} onChange={changeQuillValue} />
      <div>
        <Button onClick={handleUpload}>123</Button>
      </div>
    </div>
  )
}

export default Editor
