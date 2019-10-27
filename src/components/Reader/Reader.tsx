import React from 'react'
import Panel from '../core/Panel'

const Reader = () => {
  const fakeList = [
    {
      id: 0,
      content: 'mnoisd',
      date: '123123'
    },
    {
      id: 1,
      content: 'mnoisd',
      date: '123123'
    },
    {
      id: 2,
      content: 'mnoisd',
      date: '123123'
    },
    {
      id: 3,
      content: 'mnoisd',
      date: '123123'
    }
  ]
  return (
    <div>
      {fakeList.map(item => {
        return <Panel key={item.id} content={item.content} date={item.date} />
      })}
    </div>
  )
}

export default Reader
