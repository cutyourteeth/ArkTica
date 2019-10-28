import React from 'react'
import Panel from '../core/Panel'

const Reader = () => {
  const logs = [] as any[]
  return (
    <div>
      {logs.map(item => {
        return <Panel key={item.id} content={item.content} date={item.date} />
      })}
    </div>
  )
}

export default Reader
