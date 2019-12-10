import { useEffect, useMemo, useState } from 'react'

export interface IEditorStore {
  title: string
  date: string
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
  title: '',
  date: '',
  quillConfig,
  quillValue: ''
}

const useEditorStore = () => {
  const [editorStore, setEditorStore] = useState<IEditorStore>(emptyStore)

  const setters = useMemo(
    () => ({
      changeTitle(title: string) {
        setEditorStore(s => {
          const updatedState = { ...s }
          updatedState.title = title
          return updatedState
        })
      },

      changeDate(dateString: string) {
        setEditorStore(s => {
          const updatedState = { ...s }
          updatedState.date = dateString
          return updatedState
        })
      },

      changeQuillValue(value: string) {
        setEditorStore(s => {
          const updatedState = { ...s }
          updatedState.quillValue = value
          return updatedState
        })
      },

      // 重置Quill内容
      resetQuillValue() {
        setEditorStore(s => {
          const updatedState = { ...s }
          updatedState.quillValue = ''
          return updatedState
        })
      },

      
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

// const useEditor = contextStore.create(useEditorStore)
// export default useEditorStore
export default useEditorStore
