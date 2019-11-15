import moment from 'moment'
import React from 'react'

interface IProps {
  content: React.ReactElement | string
  date: Date | string
}
const Panel = (props: IProps) => {
  const {date,content}=props
  return (
    <div>
      <div>{content}</div>
      <div>
        <span>{moment(date).format("YYYY-MM-DD HH:mm:ss")}</span>
      </div>
    </div>
  )
}

export default Panel
