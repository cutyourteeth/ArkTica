/* 数据库通用抽象接口 */
export type Type = keyof BasicDatabase

export interface BasicUnit {
  type: Type
  data: { [key: string]: any }
}

interface DefaultRoot {
  id: { diaries: number; notes: number } // id-auto-increment
}

export interface BasicDatabase {
  __root__: DefaultRoot
  diaries: Diary[]
  notes: Note[]
  setting: Setting
}

export interface BasicFind {
  type: Type
  key: { [key: string]: any }
}

export interface BasicRequire {}

/* 实例接口 */

export interface Diary {
  title: string
  date: string
  createDate: string
  updateDate: string
  content: string
}

export interface FullDiary extends Diary {
  id: number
}

export interface Note {
  content: string
}

export interface Setting {
  direct: boolean //
}
