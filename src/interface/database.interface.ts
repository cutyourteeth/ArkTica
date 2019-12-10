export interface Note {
  title: string
  date: string
  createDate: string
  updateDate: string
  content: string
}

export interface BasicDatabase{
  notes:Note[]

}
