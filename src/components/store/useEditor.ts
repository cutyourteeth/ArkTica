import { useState, useMemo, useEffect } from "react";

export interface IEditorStore {
  quillConfig: { placeholder: string; modules: { [propName: string]: any[] } };
  quillValue: string;
}

const quillConfig = {
  placeholder: "输入日志内容...",
  modules: {
    toolbar: ["bold", "italic", "underline", "strike", "image"]
  }
};

const emptyStore = {
  quillConfig,
  quillValue: ""
};

const useEditor = () => {
  const [editorStore, seteditorStore] = useState<IEditorStore>(emptyStore);

  const setters = useMemo(
    () => ({
      changeQuillValue(value: string) {
        console.log(value);
        seteditorStore(s => {
          const updatedState = { ...s };
          updatedState.quillValue = value;
          return updatedState;
        });
      }
    }),
    []
  );

  useEffect(() => {
    return () => {
      setters.changeQuillValue("");
    };
  }, [setters]);
  return [editorStore, setters] as const;
};

export default useEditor;
