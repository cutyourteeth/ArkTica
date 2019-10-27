import React from 'react'

interface IProps {
  content: React.ReactElement | string
  date: Date | string
}
const Panel = (props: IProps) => {
  return (
    <div>
      <div>{props.content}</div>
      <div>
        <span> fake subtitle</span>
        <span> {props.date.toString()}</span>
      </div>
    </div>
  )
}

export default Panel
