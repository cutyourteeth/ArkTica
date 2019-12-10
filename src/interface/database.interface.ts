export interface Diary {
  title: string
  date: string
  createDate: string
  updateDate: string
  content: string
}

export interface Note {
  content: string
}

export interface Setting {
  direct: boolean // 直接进入
}

export interface BasicDatabase {
  diaries: Diary[]
  notes: Note[]
  setting: Setting
}

export type Type = keyof BasicDatabase

export interface BasicFind {
  type: Type
  key: { [key: string]: any }
}
export interface BasicUnit {
  type: Type
  data: { [key: string]: any }
}
