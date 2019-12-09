import { Button } from 'antd'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { uuid } from '../../utils/global-utils'
import HomeButton from '../core/HomeButton'
import useApp from '../store/useApp'
import useEditor, { IEditorStore } from '../store/useEditor'
import EditorWrapper from './style'

const low = window.require('lowdb')
// const path = window.require('path')
const FileSync = window.require('lowdb/adapters/FileSync')
const db = low(new FileSync('db.json'))

interface Note{
  title:string,
  date:string,
  createDate:string,
  updateDate:string,
  content:string,
  
}


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

    db.defaults({notes:[]})

    db.set('log', quillValue).write();



    db.defaults({ posts: [], user: {}, count: 0 }).write()

    // Add a post
    db.get('posts')
      .push({ id: 1, title: 'lowdb is awesome' })
      .write()

    // Set a user using Lodash shorthand syntax
    db.set('user.name', 'typicode').write()

    // Increment count
    db.update('count', (n:number) => n + 1).write()
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
