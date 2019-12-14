import React from 'react'
import { FullDiary } from '../../interface/database.interface'

export const DiaryUnit = (props: { diary: FullDiary }) => {
  const { title, date, createDate, updateDate, content } = props.diary
  return (
    <div>
      <div>
        {title}
        {date}
      </div>
      <div>{content}</div> {/* easyParser(content) */}
      <div>
        诞生于:「{createDate}」 最后更新于:「{updateDate}」
      </div>
    </div>
  )
}
export default DiaryUnit
