import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import Panel from '../core/Panel'

const Reader = () => {
  const logs = [] as any[]
  
  const history = useHistory()
  const back = ()=>{
    history.push('/')
  }
  return (
    <div>
      <Button onClick={back}>back</Button>
      {logs.map(item => {
        return <Panel key={item.id} content={item.content} date={item.date} />
      })}
    </div>
  )
}

export default Reader
