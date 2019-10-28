import React from 'react'
import Panel from '../core/Panel'
import { ILog } from '../store/useApp'

const Reader = (props: { logs: ILog[] }) => {
  return (
    <div>
      {props.logs.map(item => {
        return <Panel key={item.id} content={item.content} date={item.date} />
      })}
    </div>
  )
}

export default Reader
