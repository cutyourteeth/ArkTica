import { Button, DatePicker, Input } from 'antd'
import moment, { Moment } from 'moment'
import React, { ChangeEvent, useEffect } from 'react'
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
  const { quillConfig, quillValue, title } = editorStore as IEditorStore
  let { date } = editorStore
  const { changeQuillValue, resetQuillValue, changeTitle, changeDate } = setters

  const [, appSetters] = useApp()
  const { addLog } = appSetters

  // 每次启动时检查db初始化
  useEffect(() => {
    databaseExecutors.initial()
  }, [])

  const handleUpload = () => {
    storeLogToLocal()
    resetQuillValue()
  }

  // 本地数据库持久化
  const saveLocal = () => {
    if (!date) {
      date = moment().format('YYYY-MM-DD')
    }
    const data = { content: quillValue, date, title }
    databaseExecutors.insert({ type: 'diaries', data })
  }

  const loadLocal = () => {}

  const storeLogToLocal = () => {
    const newLog = { content: quillValue, id: uuid(), date: new Date() }
    addLog(newLog)
  }

  const handleDateChange = (date: Moment | null, dateString: string) => {
    changeDate(dateString)
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeTitle(event.target.value)
  }

  return (
    <EditorWrapper>
      <HomeButton />
      <DatePicker onChange={handleDateChange} />
      <Input onChange={handleTitleChange} />
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
