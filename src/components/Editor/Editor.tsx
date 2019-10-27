import React from 'react'
import { Button } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import useEditor, { IEditorStore } from '../store/useEditor'
import useApp from '../store/useApp'

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
    console.log(12312);
    
    const newLog = { content: quillValue, id: (Math.random() * 100).toFixed(2), date: new Date() }
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
