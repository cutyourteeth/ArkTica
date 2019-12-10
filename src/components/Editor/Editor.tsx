import { Button, DatePicker } from 'antd'
import { Moment } from 'moment'
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
  const { quillConfig, quillValue, date, title } = editorStore as IEditorStore
  const { changeQuillValue, resetQuillValue } = setters

  const [, appSetters] = useApp()
  const { addLog } = appSetters

  // 每次启动时检查db初始化
  // useEffect(() => databaseExecutors.initial(), [])

  const handleUpload = () => {
    storeLogToLocal()
    resetQuillValue()
  }

  // 本地数据库持久化
  const saveLocal = () => {
    const data = { content: quillValue, date, title }
    databaseExecutors.insert({ type: 'diaries', data })
  }

  const loadLocal = () => {
    // db.get('log', quillValue)
  }

  const storeLogToLocal = () => {
    const newLog = { content: quillValue, id: uuid(), date: new Date() }
    addLog(newLog)
    // ipcRender('storeLocal', { log: quillValue })
  }

  const handleDateChange = (date: Moment | null, dateString: string) => {
    console.log(date, dateString)
  }

  return (
    <EditorWrapper>
      <HomeButton />
      <DatePicker onChange={handleDateChange} />
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
