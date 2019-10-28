import { useEffect, useMemo, useState } from 'react'
import contextStore from '../../utils/context-store'

export interface IEditorStore {
  quillConfig: { placeholder: string; modules: { [propName: string]: any[] } }
  quillValue: string
}

const quillConfig = {
  placeholder: '输入日志内容...',
  modules: {
    toolbar: ['bold', 'italic', 'underline', 'strike', 'image']
  }
}

const emptyStore = {
  quillConfig,
  quillValue: ''
}

const useEditorStore = () => {
  const [editorStore, setEditorStore] = useState<IEditorStore>(emptyStore)

  const setters = useMemo(
    () => ({
      changeQuillValue(value: string) {
        setEditorStore(s => {
          const updatedState = { ...s }
          updatedState.quillValue = value
          return updatedState
        })
      },

      resetQuillValue() {
        setEditorStore(s => {
          const updatedState = { ...s }
          updatedState.quillValue = ''
          return updatedState
        })
      }
    }),
    []
  )

  useEffect(() => {
    return () => {
      setters.changeQuillValue('')
    }
  }, [setters])
  return [editorStore, setters] as const
}

const useEditor = contextStore.create(useEditorStore)
export default useEditorStore
