import React from 'react'
import Panel from '../core/Panel'

const Reader = () => {
  const fakeList = [
    {
      content: 'mnoisd',
      date: '123123'
    },
    {
      content: 'mnoisd',
      date: '123123'
    },
    {
      content: 'mnoisd',
      date: '123123'
    },
    {
      content: 'mnoisd',
      date: '123123'
    }
  ]
  return (
    <div>
      {fakeList.map(item => {
        return <Panel content={item.content} date={item.date} />
      })}
    </div>
  )
}

export default Reader
