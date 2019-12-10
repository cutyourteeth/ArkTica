import { Button } from 'antd'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import databaseExecutors from '../../database'
import { uuid } from '../../utils/global-utils'
import HomeButton from '../core/HomeButton'
import useApp from '../store/useApp'
import useEditor, { IEditorStore } from '../store/useEditor'
import EditorWrapper from './style'

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

  const saveLocal = () => {
    databaseExecutors.initialDatabase()
  }

  const loadLocal = () => {
    // db.get('log', quillValue)
  }

  const storeLogToLocal = () => {
    const newLog = { content: quillValue, id: uuid(), date: new Date() }
    addLog(newLog)

    // ipcRender('storeLocal', { log: quillValue })
  }

  return (
    <EditorWrapper>
      <HomeButton />
      <ReactQuill {...quillConfig} value={quillValue} onChange={changeQuillValue} />
      <div>
        <Button onClick={handleUpload}>handleUpload</Button>
        <Button onClick={saveLocal}>saveLocal</Button>
        <Button onClick={loadLocal}>loadLocal</Button>
      </div>
    </EditorWrapper>
  )
}

export default Editor
